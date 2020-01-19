import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  // redis = {
  //   enable: true,
  //   package: 'egg-redis',
  // },
  // sessionRedis = {
  //   enable: true,
  //   package: 'egg-session-redis',
  // },
  // graphql = {
  //   enable: true,
  //   package: 'egg-graphql',
  // },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};

export default plugin;
