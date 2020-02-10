import { Controller } from 'egg';

export default class HomeController extends Controller {
    async login() {
        const { ctx } = this;
        const user = { username: ctx.request.body.username, password: ctx.request.body.password };
        const result = await ctx.service.admin.user.login(user);
        ctx.body = result;
    }
    async addArticle() {
        const { ctx } = this;
        const article = ctx.request.body;
        const result = await ctx.service.admin.article.create(article);
        ctx.body = result;
    } 
    async findArticles() {
        const { ctx } = this;
        const result = await ctx.service.admin.article.findArticles();
        ctx.body = result;
    }
    
    async deleteArticle() {
        const { ctx } = this;
        const { id } = ctx.request.body
        const result = await ctx.service.admin.article.delete(id);
        ctx.body = result;
    }

    async getArticleById() {
        const { ctx } = this;
        const { id } = ctx.params
        const result = await ctx.service.admin.article.getArticleById(id);
        ctx.body = result;
    }


    async updateArticle() {
        const { ctx } = this;
        const result = await ctx.service.admin.article.update(ctx.request.body);
        ctx.body = result;
    }

}
