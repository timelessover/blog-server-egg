import { Service } from 'egg';
/**
 *  Comment Service
 */
export default class CommentService extends Service {

    async addComment(content) {
        const { ctx } = this;
        const { article_id } = content
        const article = await ctx.model.Article.findOne(
          {
            _id: article_id
          },
        );
        await ctx.model.Article.updateOne(
          {
            _id: article_id
          },
          {
            comment_count: article.comment_count + 1
          }
        );
        
        const result = new ctx.model.Comment(content).save();
        return result;
    }
    async addSubComment(content) {
        const { ctx } = this;
        const { _id, res_id} = content;
        const comment = await ctx.model.Comment.findOne({ _id }).populate('userInfo').exec();
        // 这段文档查询字段没写，可以查询多个字段，ts标注为any
        const res_userInfo = await ctx.model.User.findOne({ _id: res_id }, { username: 'username', avatar:'avatar'});
        const user = await ctx.model.User.findOne({ _id: res_id }, { username: 'username', avatar: 'avatar' });
        const list = comment.res_comment
        list.push({
            res_userInfo: res_userInfo,
            user: user,
            likes: 0,
            content: '太刷了fff',
        })
        const res = await ctx.model.Comment.updateOne(
            { _id },
            {
                res_comment: list,
            },
        )
        return res;
    }
}
