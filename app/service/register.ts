import { Service } from 'egg';
import { uid } from '../utils/uuid';

/**
 * Test Service
 */
export default class RegisterService extends Service {

  async register(user) {
    const { ctx } = this;
    let result;
    const hasSameUser = await ctx.model.User.findOne({ username: user.username });
    if (hasSameUser) {
      result = {
        status: 'fail',
      };
    } else {
      // 生成 uuid 作为所有文档的查询唯一值
      user.uuid = uid();
      const save_user = new ctx.model.User(user);
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
    const hasUser = await ctx.model.User.findOne({ username: user.username });
    if (hasUser) {
      if (hasUser.password === user.password) {
        const token = app.jwt.sign({ uuid: hasUser.uuid }, app.config.jwt.secret);
        result = {
          name: hasUser.username,
          status: '0',
          token,
        };

      } else {
        result = {
          status: '1',
        };
      }
    } else {
      result = {
        status: '2',
      };
    }
    return result;
  }
}
