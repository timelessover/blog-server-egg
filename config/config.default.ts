import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1579251381559_9776';

  // add your egg config in here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb',
    options: {},
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:8000' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  exports.jwt = {
    enable: true,
    secret: '123456',
    match(ctx) {
      const regex = /login/;
      return !regex.test(ctx.url);
    },
  } as any;

  // add your special config in here
  const bizConfig = {
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
