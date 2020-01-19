import * as egg from 'egg';

export default (app: egg.Application) => {
  const { controller, router, jwt } = app;
  // 登陆注册
  router.post('/register', controller.register.register);
  router.post('/login', controller.register.login);

  // blog 增删改查
  router.post('/blog/getBlogs', jwt as any, controller.blog.getAllBlog);
  router.post('/blog/create', jwt as any, controller.blog.create);
  router.post('/blog/update', jwt as any, controller.blog.update);
  router.post('/blog/delete', jwt as any, controller.blog.delete);
};
