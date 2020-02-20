export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        username: {
            type: String,
        },
        password: {
            type: String,
        },
        // 用户头像
        avatar: { type: String},
        
        // 创建日期
        create_time: { type: Date, default: Date.now },

        // 最后修改日期
        update_time: { type: Date, default: Date.now },
    });
    return mongoose.model('User', UserSchema);
};
