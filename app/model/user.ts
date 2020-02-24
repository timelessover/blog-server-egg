export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        github_id:{
            type:String
        },
        // 用户名 
        username: {
            type: String,required:true
        },
        email: {
            type: String
        },
        // 手机号
        phone: {
            type: String,
        },
        // 用户头像
        avatar: { type: String},

        // 用户个人主页

        home_page:{
            type:String
        },
        
        // 创建日期
        create_time: { type: Date, default: Date.now },

        // 最后修改日期
        update_time: { type: Date, default: Date.now },
    });
    return mongoose.model('User', UserSchema);
};
