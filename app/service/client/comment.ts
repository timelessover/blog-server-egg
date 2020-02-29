import { Service } from "egg";
/**
 *  Comment Service
 */
export default class CommentService extends Service {
  async addComment(content) {
    const { ctx } = this;
    // const { article_id,uid } = content

    // 处理总
    // const article = await ctx.model.Article.findOne(
    //   {
    //     _id: article_id
    //   },
    // );
    // await ctx.model.Article.updateOne(
    //   {
    //     _id: article_id
    //   },
    //   {
    //     comment_count: article.comment_count + 1
    //   }
    // );

    const result = new ctx.model.Comment(content).save();
    if (result) {
      return {
        code: 0,
        msg: "评论成功"
      };
    } else {
      return {
        code: 1,
        msg: "登录后才可评论"
      };
    }
  }
  async addSubComment(content) {
    const { ctx } = this;
    const { _id, res_id } = content;
    const comment = await ctx.model.Comment.findOne({ _id })
      .populate("userInfo")
      .exec();
    // 这段文档查询字段没写，可以查询多个字段，ts标注为any
    const res_userInfo = await ctx.model.User.findOne(
      { _id: res_id },
      { username: "username", avatar: "avatar" }
    );
    const user = await ctx.model.User.findOne(
      { _id: res_id },
      { username: "username", avatar: "avatar" }
    );
    const list = comment.res_comment;
    list.push({
      res_userInfo: res_userInfo,
      user: user,
      likes: 0,
      content: "太刷了fff"
    });
    const res = await ctx.model.Comment.updateOne(
      { _id },
      {
        res_comment: list
      }
    );
    return res;
  }
  async getCommentList(content) {
    const { ctx } = this;
    const { uid, article_id } = content;
    const comments = await ctx.model.Comment.find({ article_id })
      .populate("uid")
      .exec();
    let res_comments: any = [];
    /*
      https://juejin.im/post/5cf7042df265da1ba647d9d1#heading-1
      async/await在map,forEach等高阶函数中使用问题
    */
    if (uid) {
      for (let i = 0; i < comments.length; i++) {
        let item = comments[i];
        const { _id } = item;
        const commentzan = await ctx.model.Commentzan.findOne({
          comment_id: _id,
          uid
        });
        if (commentzan) {
          item.isLiked = commentzan.isLiked;
        }
        res_comments.push(item);
      }

      return {
        count: res_comments.length,
        data: res_comments
      };
    } else {
      return {
        count: comments.length,
        data: comments
      };
    }
  }
  async updateLikeComment(content) {
    const { ctx } = this;
    const { uid, comment_id } = content;

    // 该用户为这条评论是否点赞
    const result_commentzan = await ctx.model.Commentzan.findOne({
      comment_id,
      uid
    });
    // 找到对应的评论
    const result_comment = await ctx.model.Comment.findOne({ _id: comment_id });
    // 该用户是否对该评论点赞过
    if (!result_commentzan) {
      // 第一次点赞，新建一个文档，默认点在为true
      await new ctx.model.Commentzan(content).save();

      await ctx.model.Comment.updateOne(
        { _id: comment_id },
        {
          likes_count: result_comment.likes_count + 1
        }
      );
    } else {
      // 存在该文档，我们更新isLiked状态
      if (result_commentzan.isLiked) {
        await ctx.model.Comment.updateOne(
          { _id: comment_id },
          {
            likes_count: result_comment.likes_count - 1
          }
        );
      }else{
         await ctx.model.Comment.updateOne(
           { _id: comment_id },
           {
             likes_count: result_comment.likes_count + 1
           }
         );
      }
      await ctx.model.Commentzan.updateOne(
        { comment_id, uid },
        {
          isLiked: !result_commentzan.isLiked
        }
      );
    }
    return {
      msg: "ok",
      code: 1
    };
  }
}
