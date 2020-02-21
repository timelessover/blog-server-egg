import { Controller } from "egg";

export default class BlogController extends Controller {
  async getAllArticle() {
    const { ctx } = this;
    // const token = ctx.header.authorization;
    // const payload = await app.jwt.verify(token.split(' ')[1], app.config.jwt.secret) || {};
    const reuslt = await ctx.service.client.article.getAllArticle();
    ctx.body = reuslt;
  }
  async getCategories() {
    const { ctx } = this;
    const reuslt = await ctx.service.client.article.getCategories();
    ctx.body = reuslt;
  }
  async getArticleList() {
    const { ctx } = this;
    const { categroy_id } = ctx.query;
    const reuslt = await ctx.service.client.article.getArticleList(categroy_id);
    ctx.body = reuslt;
  }
}
