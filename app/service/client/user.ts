import { Service } from 'egg';

/**
 * User Service
 */
export default class UserService extends Service {

  async login(user) {
    const { ctx, app } = this;
    let result;
    const hasUser = await ctx.model.User.findOne({ username: user.username });
    if (hasUser) {
      if (hasUser.password === user.password) {
        const token = app.jwt.sign({ uuid: hasUser.uuid }, app.config.jwt.secret);
        result = {
          user_name: hasUser.username,
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
