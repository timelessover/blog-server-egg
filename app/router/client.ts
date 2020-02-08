module.exports = app => {
    // , jwt 
    const { controller, router} = app;
    router.get('/api/index', controller.client.home.register)
}