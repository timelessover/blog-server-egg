export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const AdminSchema = new Schema({
        uuid: {
            type: String,
        },
        username: {
            type: String,
        },
        password: {
            type: String,
        },
    });

    return mongoose.model('Admin', AdminSchema);
};
