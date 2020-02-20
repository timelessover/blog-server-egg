import { Service } from 'egg';
/**
 *  Comment Service
 */
export default class CommentService extends Service {

    async addComment(content) {
        const { ctx } = this;
        const result = new ctx.model.Comment(content).save();
        return result;
    }
    async addSubComment(content) {
        const { ctx } = this;
        const result = new ctx.model.SubComment(content).save();
        return result;
    }

    async getCategories() {
        const { ctx } = this;
        const result = await ctx.model.Category.find().sort({ 'article_num': -1 }).exec();
        return result;
    }
    async getArticleById(id) {
        const { ctx } = this;
        const result = await ctx.model.Article.findOne({ _id: id }).populate('category').exec();
        if (result) {
            return result;
        } else {
            return { code: 1, msg: '获取文章失败' };
        }
    }
}
