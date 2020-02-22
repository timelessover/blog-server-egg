import { Controller } from "egg";
import fetch from "node-fetch";

const config = {
  client_id: "9bee0b54d80bcd9a78da",
  client_secret: "696fde177a9a3b833d1d5b044409f4fd050ebb2e",
  scope: ["user"]
};

export default class UserController extends Controller {
  async loginCallback() {
    const { ctx } = this;
    const code = ctx.request.body.code;
    const path = "https://github.com/login/oauth/access_token";
    const params = {
      client_id: config.client_id,
      client_secret: config.client_secret,
      code: code
    };
    console.log(code);
    const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
    const body = await res.text();
    const args = body.split("&");
    let arg = args[0].split("=");
    const access_token = arg[1];
    const url = "https://api.github.com/user?access_token=" + access_token;
    const data = await fetch(url);
    const result = await data.json();
    ctx.body = result;
  }
}
