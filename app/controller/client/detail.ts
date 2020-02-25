import { Controller } from "egg";

export default class ArticleController extends Controller {
  async getArticleById() {
    const { ctx } = this;
    const { article_id } = ctx.query;
    const reuslt = await ctx.service.client.article.getArticleById(article_id);
    ctx.body = reuslt;
  }
  async updateLikeArticle() {
    const { ctx, app } = this;
    const { article_id } = ctx.request.body;
    const token = ctx.header.authorization;
    const payload =
      (await app.jwt.verify(token.split(" ")[1], app.config.jwt.secret)) || {};
    const content = { ...payload, article_id };
    const reuslt = await ctx.service.client.article.updateLikeArticle(content);
    ctx.body = reuslt;
  }
  async isLikeArticle() {
    const { ctx, app } = this;
    const { article_id } = ctx.request.body;
    const token = ctx.header.authorization;
    const payload =
      (await app.jwt.verify(token.split(" ")[1], app.config.jwt.secret)) || {};
    const content = { ...payload, article_id };
    const reuslt = await ctx.service.client.article.isLikeArticle(content);
    ctx.body = reuslt;
  }
}
