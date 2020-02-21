module.exports = app => {
    // , jwt 
    const { controller, router} = app;
    router.get('/api/articles', controller.client.home.getAllArticle)
    router.get('/api/categories', controller.client.home.getCategories)
    router.get("/api/articlelist", controller.client.home.getArticleList);
    router.get('/api/article', controller.client.detail.getArticleById)
    
    // 评论
    // router.get('/api/commentlist', controller.client.detail.getCommentList)
    router.post('/api/comment/add', controller.client.comment.addComment)
    router.post('/api/subComment/add', controller.client.comment.addSubComment)
}