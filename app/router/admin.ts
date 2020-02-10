module.exports = app => {
    // , jwt 
    
    const { controller, router } = app;
    router.post('/api/admin/login', controller.admin.home.login)
    router.post('/api/admin/article/add', controller.admin.home.addArticle)
    router.post('/api/admin/article/update', controller.admin.home.updateArticle)
    router.get('/api/admin/getArticleById/:id', controller.admin.home.getArticleById)
    router.get('/api/admin/articles', controller.admin.home.findArticles)
    router.post('/api/admin/article/delete', controller.admin.home.deleteArticle)
}