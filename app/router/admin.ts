module.exports = app => {
    // , jwt 
    
    const { controller, router } = app;

    // 登录
    router.post('/api/admin/login', controller.admin.home.login)

    // 文章编辑
    router.post('/api/admin/article/add', controller.admin.article.addArticle)
    router.post('/api/admin/article/update', controller.admin.article.updateArticle)
    router.post('/api/admin/article/delete', controller.admin.article.deleteArticle)
    router.get('/api/admin/getArticleById/:id', controller.admin.article.getArticleById)
    router.get('/api/admin/articles', controller.admin.article.findArticles)

    // 分类编辑
    router.post('/api/admin/category/add', controller.admin.category.addCategory)
    router.post('/api/admin/category/delete', controller.admin.category.deleteCategory)
    router.post('/api/admin/category/update', controller.admin.category.updateCategory)
    router.post('/api/admin/getCategoryById', controller.admin.category.getCategoryById)
    router.get('/api/admin/categories', controller.admin.category.getCategories)

}