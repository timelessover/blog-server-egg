import { Controller } from 'egg';

export default class BlogController extends Controller {
  async getAllBlog() {
    const { ctx, app } = this;
    const token = ctx.header.authorization;
    const payload = await app.jwt.verify(token.split(' ')[1], app.config.jwt.secret) || {};
    const reuslt = await ctx.service.blog.getAllBlog(payload);
    ctx.body = reuslt;
  }
  async create() {
    const { ctx, app } = this;
    const token = ctx.header.authorization;
    const payload = await app.jwt.verify(token.split(' ')[1], app.config.jwt.secret) || {};
    const content = { ...ctx.request.body, ...payload };
    const reuslt = await ctx.service.blog.create(content);
    ctx.body = reuslt;
  }
  async update() {
    const { ctx, app } = this;
    const token = ctx.header.authorization;
    const payload = await app.jwt.verify(token.split(' ')[1], app.config.jwt.secret) || {};
    const content = { ...ctx.request.body, ...payload };
    const reuslt = await ctx.service.blog.update(content);
    ctx.body = reuslt;

  }
  async delete() {
    const { ctx, app } = this;
    const token = ctx.header.authorization;
    const payload = await app.jwt.verify(token.split(' ')[1], app.config.jwt.secret) || {};
    const content = { ...ctx.request.body, ...payload };
    const reuslt = await ctx.service.blog.delete(content);
    ctx.body = reuslt;
  }
  async getTagList() {
    const { ctx, app } = this;
    const token = ctx.header.authorization;
    const payload = await app.jwt.verify(token.split(' ')[1], app.config.jwt.secret) || {};
    const content = { ...ctx.request.body, ...payload };
    const reuslt = await ctx.service.blog.getTagList(content);
    ctx.body = reuslt;
  }
  async findTagList() {
    const { ctx, app } = this;
    const token = ctx.header.authorization;
    const payload = await app.jwt.verify(token.split(' ')[1], app.config.jwt.secret) || {};
    const content = { ...ctx.request.body, ...payload };
    const reuslt = await ctx.service.blog.findTagList(content);
    ctx.body = reuslt;
  }
}
