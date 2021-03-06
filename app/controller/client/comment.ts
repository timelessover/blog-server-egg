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

  async getCommentList() {
    const { ctx } = this;
    const { article_id, uid } = ctx.query;
    const reuslt = await ctx.service.client.comment.getCommentList({
      article_id,
      uid
    });
    ctx.body = reuslt;
  }
  async updateLikeComment() {
    const { ctx, app } = this;
    const token = ctx.header.authorization;
    const payload =
      (await app.jwt.verify(token.split(" ")[1], app.config.jwt.secret)) || {};
    const content = { ...payload, ...ctx.request.body };
    const reuslt = await ctx.service.client.comment.updateLikeComment(content);
    ctx.body = reuslt;
  }
  async replyComment() {
    const { ctx, app } = this;
    const token = ctx.header.authorization;
    const payload =
      (await app.jwt.verify(token.split(" ")[1], app.config.jwt.secret)) || {};
    const content = { ...payload, ...ctx.request.body };
    const reuslt = await ctx.service.client.comment.replyComment(content);
    ctx.body = reuslt;
  }
}
