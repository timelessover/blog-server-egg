import { Controller } from 'egg';

export default class AdminController extends Controller {
    async register() {
        const { ctx } = this;
        const user = { username: ctx.request.body.username, password: ctx.request.body.password };
        const reuslt = await ctx.service.admin.register(user);
        ctx.body = reuslt;
    }
    async login() {
        const { ctx } = this;
        const user = { username: ctx.request.body.username, password: ctx.request.body.password };
        const result = await ctx.service.admin.login(user);
        ctx.body = result;
    }
    async getAllUser() {
        const { ctx } = this;
        const result = await ctx.service.admin.getAllUser();
        ctx.body = result;
    }
}
