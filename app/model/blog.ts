export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const BlogSchema = new Schema({
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        uuid: {
            type: String,
        },
        blogId: {
            type: String,
        },
    });
    return mongoose.model('Blog', BlogSchema);
};
