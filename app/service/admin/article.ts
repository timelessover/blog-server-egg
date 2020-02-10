import { Service } from 'egg';
/**
 * Blog Service
 */
export default class BlogService extends Service {

    async findArticles() {
        const { ctx } = this;
        const result = ctx.model.Article.find();
        return result;
    }

    async create(blog) {
        const { ctx } = this;
        const result = await new ctx.model.Article(blog).save();
        if (result) {
            return { code: 0, msg: '创建成功' };
        } else {
            return { code: 1, msg: '创建失败' };
        }
    }
    async getArticleById(article_id) {
       
        const { ctx } = this;
        const result = await ctx.model.Article.findOne({ article_id});
        if (result) {
            return result;
        } else {
            return { code: 1, msg: '获取文章失败' };
        }
    }
    async update(article) {
        console.log(article)
        const { article_id } = article;
        article.update_time = Date.now();
        const { ctx } = this;
        const result = await ctx.model.Article.findOneAndUpdate({article_id }, article);
        if (result) {
            return { code: 0, msg: '更新成功' };
        } else {
            return { code: 1, msg: '更新失败' };
        }
    }
    async delete(article_id) {
        const { ctx } = this;
        const result = await ctx.model.Article.findOneAndRemove({ article_id});
        if (result) {
            return { code: 0, msg: '删除成功' };
        } else {
            return { code: 1, msg: '删除失败' };
        }
    }
}
