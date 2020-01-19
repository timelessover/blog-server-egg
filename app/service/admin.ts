import { Service } from 'egg';
import { uid } from '../utils/uuid';

/**
 * Admin Service
 */
export default class AdminService extends Service {

    async register(user) {
        const { ctx } = this;
        let result;
        const hasSameUser = await ctx.model.Admin.findOne({ username: user.username });
        if (hasSameUser) {
            result = {
                status: 'fail',
            };
        } else {
            user.uuid = uid();
            const save_user = new ctx.model.Admin(user);
            await save_user.save();
            result = {
                status: 'ok',
            };
        }
        return result;
    }
    async login(user) {
        const { ctx, app } = this;
        let result;
        const hasUser = await ctx.model.Admin.findOne({ username: user.username });
        if (hasUser) {
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
        } else {
            result = {
                msg: '用户不存在',
                status: '2',
            };
        }
        return result;
    }
    async getAllUser() {
        const { ctx } = this;
        const result = await ctx.model.User.find();
        if (!result) {
            return {
                status: 'fail',
            };
        } else {
            return result;
        }
    }
}
