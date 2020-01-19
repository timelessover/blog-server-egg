import { Controller } from 'egg';

export default class UserController extends Controller {
  async register() {
    const { ctx } = this;
    const user = { username: ctx.request.body.username, password: ctx.request.body.password };
    const reuslt = await ctx.service.user.register(user);
    ctx.body = reuslt;
  }
  async login() {
    const { ctx } = this;
    const user = { username: ctx.request.body.username, password: ctx.request.body.password };
    const result = await ctx.service.user.login(user);
    ctx.body = result;
  }
}
