import { Service } from 'egg';

/**
 * Admin Service
 */
export default class AdminService extends Service {
    
    async login(user) {
        const { ctx, app } = this;
        let result;
        const hasUser = await ctx.model.Admin.findOne({ username: user.username });
        if (hasUser.password === user.password) {
            const token = app.jwt.sign({ uuid: hasUser.uuid }, app.config.jwt.secret);
            result = {
                name: hasUser.username,
                code: '0',
                msg: '登陆成功',
                token,
            };

        } else {
            result = {
                msg: '密码错误',
                status: '1',
            };
        }
        return result;
    }
}
