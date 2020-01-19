import * as egg from 'egg';

export default (app: egg.Application) => {
  const { controller, router, jwt } = app;
  // 管理员登陆注册
  router.post('/admin/register', controller.admin.register);
  router.post('/admin/login', controller.admin.login);
  router.post('/admin/getAllUser', controller.admin.getAllUser);

  // 用户登陆注册
  router.post('/user/register', controller.user.register);
  router.post('/user/login', controller.user.login);

  // blog 增删改查
  router.post('/blog/getBlogs', jwt as any, controller.blog.getAllBlog);
  router.post('/blog/create', jwt as any, controller.blog.create);
  router.post('/blog/update', jwt as any, controller.blog.update);
  router.post('/blog/delete', jwt as any, controller.blog.delete);
};
