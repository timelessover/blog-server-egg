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
  async getCommentList(article_id) {
    const { ctx } = this;
    const result = await ctx.model.Comment.find({ article_id })
      .populate("uid")
      .exec();
    return {
      count: result.length,
      data: result
    };
  }
  async updateLikeComment(content) {
    const { ctx } = this;
    const { uid, comment_id } = content;
    const result = await ctx.model.Comment.findOne({
      comment_id,
      uid
    });
    await ctx.model.Comment.updateOne(
      { _id: comment_id, uid },
      {
        isLiked: !result.isLiked
      }
    );
    return {
      msg: 'ok',
      isLiked: !result.isLiked
    };
  }
}
