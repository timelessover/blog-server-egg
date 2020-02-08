import { Controller } from 'egg';

export default class HomeController extends Controller {
    async login() {
        const { ctx } = this;
        const user = { username: ctx.request.body.username, password: ctx.request.body.password };
        console.log(ctx.service.admin)
        const result = await ctx.service.admin.user.login(user);
        ctx.body = result;
    }
}
