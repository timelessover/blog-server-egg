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
    const token = app.jwt.sign({ uid: _id }, app.config.jwt.secret);
    const userInfo = {
      username,
      avatar
    };
    result = { token, userInfo };
    return result;
  }

  async generalRegister(user) {
    const { ctx } = this;
    /*
    email: "714586115@qq.com"
    username: "Chris"
    password: "asd123456"
    confirm: "asd123456"
    homepage: "wwww"
    */
    const { username, homepage, email, password } = user;
    const search_res = await ctx.model.User.findOne({ email });
    let result;
    if (!search_res) {
      const conent = {
        username,
        email,
        password,
        homepage
      };
      await new ctx.model.User(conent).save(user);
      result = { code: 1, msg: "注册成功" };
    } else {
      result = { code: 0, msg: "用户已存在" };
    }
    return result;
  }

  async generalLogin(user) {
    const { ctx,app } = this;
    const { email, password } = user;
    let result;
    const hasUser = await ctx.model.User.findOne({
      email: email
    });

    if (hasUser) {

      if (password === hasUser.password) {
        const token = app.jwt.sign({ uid: hasUser._id }, app.config.jwt.secret);
        result = {
          code: 0,
          msg: "登录成功",
          userInfo: {
            username: hasUser.username,
            avatar: hasUser.avatar
          },
          token
        };
      } else {
        result = {
          code: 1,
          msg: "密码错误"
        };
      }
    } else {
      result = {
        code: 2,
        msg: "该邮箱未注册"
      };
    }
    return result;
  }
}
