import { Service } from 'egg';
import * as moment from 'moment';

/**
 * Admin Service
 */
export default class AdminService extends Service {
    
    async login(user) {
        const { ctx } = this;
        const hasUser = await new ctx.model.User({ username: user.username }).save();

        return {
            data: hasUser
        }
        // if (hasUser) {
        //     if (hasUser.password === user.password) {
        //         const token = app.jwt.sign({ uuid: hasUser.uuid }, app.config.jwt.secret);
        //         result = {
        //             name: hasUser.username,
        //             code: '0',
        //             msg: '登陆成功',
        //             token,
        //         };

        //     } else {
        //         result = {
        //             msg: '密码错误',
        //             status: '1',
        //         };
        //     }
        // } else {
        //     result = {
        //         msg: '用户不存在',
        //         status: '2',
        //     };
        // }
        // return result;
    }
    async getAllUser() {
        const { ctx } = this;
        const result = await ctx.model.User.find();
        if (!result) {
            return {
                status: 'fail',
            };
        } else {
            const temp: any = [];
            result.forEach(user => {
                const t = JSON.parse(JSON.stringify(user));
                t.create_time = moment(new Date(t.create_time).getTime()).format('YYYY-MM-DD HH:mm:ss');
                const { username, uuid, create_time } = t;
                temp.push({ username, uuid, create_time });
            });
            return temp;
        }
    }
}
