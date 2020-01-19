import { EggAppConfig, Context, Application } from 'egg';

module.exports = (options: EggAppConfig['parseToken'], app: Application) => {
    return async function parseToken(ctx: Context, next: () => Promise<any>) {
        console.log(options, app, ctx);
        await next();
    };
};
