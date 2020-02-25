module.exports = app => {
  // , jwt
  const { controller, router } = app;
  router.get("/api/articles", controller.client.home.getAllArticle);
  router.get("/api/categories", controller.client.home.getCategories);
  router.get("/api/articlelist", controller.client.home.getArticleList);
  router.get("/api/article", controller.client.detail.getArticleById);

  router.post("/api/register/general", controller.client.user.generalRegister);
  router.post("/api/login/general", controller.client.user.generalLogin);
  router.post("/api/github/login", controller.client.user.githubRegister);

  // 文章点赞
  // router.post("/api/like/add", controller.client.detail.addLikeCount);
  // router.post("/api/like/delete", controller.client.detail.deleteLikeCount);

  // 评论
  // router.get('/api/commentlist', controller.client.detail.getCommentList)
  router.post("/api/comment/add", controller.client.comment.addComment);
  router.post("/api/subComment/add", controller.client.comment.addSubComment);
};
