export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const CategorySchema = new Schema({
        // 分类名称
        name: { type: String, required: true, validate: /\S+/,unique:true },
        
        // 分类描述
        desc: { type: String, default: '', required: true },

        // 文章篇数
        article_num: { type: Number, default: 0,},

        // 创建日期
        create_time: { type: Date, default: Date.now },

        // 最后修改日期
        update_time: { type: Date, default: Date.now },

    }, { versionKey: false });
    return mongoose.model('Category', CategorySchema);
};
