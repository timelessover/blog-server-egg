import { Controller } from "egg";

export default class ArticleController extends Controller {
  async getArticleById() {
    const { ctx } = this;
    const { article_id } = ctx.query;
    const reuslt = await ctx.service.client.article.getArticleById(article_id);
    ctx.body = reuslt;
  }
  // async addLikeCount() {
  //   const { ctx } = this;
  //   const { article_id } = ctx.query;
  //   const reuslt = await ctx.service.client.article.addLikeCount(article_id);
  //   ctx.body = reuslt;
  // }
}
