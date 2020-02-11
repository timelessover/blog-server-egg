import { Service } from 'egg';
/**
 * Article Service
 */
export default class ArticleService extends Service {

    async findArticles() {
        const { ctx } = this;
        const result = await ctx.model.Article.find().populate('category').exec();
        return result;
    }

    async create(conent) {
        const { ctx } = this;
        const res = await ctx.model.Article.find(conent.category)
        const result = await new ctx.model.Article(conent).save();
        if (result) {
            return { code: 0, msg: '创建成功' };
        } else {
            return { code: 1, msg: '创建失败' };
        }
    }
    async getArticleById(id) {
        const { ctx } = this;
        const result = await ctx.model.Article.findOne({ _id:id }).populate('category').exec();
        if (result) {
            return result;
        } else {
            return { code: 1, msg: '获取文章失败' };
        }
    }
    async update(article) {
        const { _id } = article;
        article.update_time = Date.now();
        const { ctx } = this;
        const result = await ctx.model.Article.findOneAndUpdate({ _id }, article);
        if (result) {
            return { code: 0, msg: '更新成功' };
        } else {
            return { code: 1, msg: '更新失败' };
        }
    }
    async delete(id) {
        const { ctx } = this;
        const result = await ctx.model.Article.findOneAndRemove({ _id: id });
        if (result) {
            return { code: 0, msg: '删除成功' };
        } else {
            return { code: 1, msg: '删除失败' };
        }
    }
}
