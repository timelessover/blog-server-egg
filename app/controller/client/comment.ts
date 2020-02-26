import { Controller } from "egg";

export default class CommentController extends Controller {
  async addComment() {
    const { ctx, app } = this;
    const token = ctx.header.authorization;
    const payload =
      (await app.jwt.verify(token.split(" ")[1], app.config.jwt.secret)) || {};
    const content = { ...payload, ...ctx.request.body };
    const reuslt = await ctx.service.client.comment.addComment(content);
    ctx.body = reuslt;
  }

  async addSubComment() {
    const { ctx } = this;
    const reuslt = await ctx.service.client.comment.addSubComment(
      ctx.request.body
    );
    ctx.body = reuslt;
  }
  async getCommentList() {
    const { ctx } = this;
    const { article_id } = ctx.query;
    const reuslt = await ctx.service.client.comment.getCommentList(article_id);
    ctx.body = reuslt;
  }
  async updateLikeComment() {
    const { ctx,app } = this;
     const token = ctx.header.authorization;
     const payload =
       (await app.jwt.verify(token.split(" ")[1], app.config.jwt.secret)) || {};
     const content = { ...payload, ...ctx.request.body };
    const reuslt = await ctx.service.client.comment.updateLikeComment(content);
    ctx.body = reuslt;
  }
}
