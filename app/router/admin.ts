module.exports = app => {
    // , jwt 
    
    const { controller, router } = app;
    router.post('/api/admin/login', controller.admin.home.login)
}