import { Service } from "egg";

/**
 * User Service
 */
export default class UserService extends Service {
  async githubRegister(user) {
    console.log(user);
    const { ctx, app } = this;
    const { id, avatar_url, html_url, name } = user;
    const isSaveUser = await ctx.model.User.findOne({ github_id: id });
    let result;
    let login_user;
    if (!isSaveUser) {
      const conent = {
        username: name,
        avatar: avatar_url,
        home_page: html_url,
        github_id: id
      };
      login_user = await new ctx.model.User(conent).save();
    } else {
      login_user = isSaveUser;
    }
    const { _id, username, avatar } = login_user;
    const token = app.jwt.sign({ id: _id }, app.config.jwt.secret);
    const userInfo = {
      _id,
      username,
      avatar
    };
    result = { token, userInfo };
    return result;
  }

  async generalRegister(user) {
    const { ctx } = this;
    const { username, homepage, email, password } = user;
    const conent = {
      username,
      email,
      password,
      homepage
    };
    const result = await new ctx.model.User(conent).save(user);
    return result;
  }

  async login(user) {
    const { ctx, app } = this;
    let result;
    const hasUser = await ctx.model.User.findOne({
      username: user.username
    });
    if (hasUser) {
      if (hasUser.password === user.password) {
        const token = app.jwt.sign(
          { uuid: hasUser.uuid },
          app.config.jwt.secret
        );
        result = {
          user_name: hasUser.username,
          status: "0",
          token
        };
      } else {
        result = {
          status: "1"
        };
      }
    } else {
      result = {
        status: "2"
      };
    }
    return result;
  }
}
