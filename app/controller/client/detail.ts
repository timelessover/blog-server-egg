import { Controller } from 'egg';

export default class ArticleController extends Controller {
    async getArticleById() {
        const { ctx } = this;
        const { id } = ctx.query
        const reuslt = await ctx.service.client.article.getArticleById(id);
        ctx.body = reuslt;
    }
}
