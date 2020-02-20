export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const CommentSchema = new Schema({

        // 文章id
        article_id: { type: mongoose.Schema.Types.ObjectId, required: true},

        // 被评论用户信息
        res_userInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],

        // 用户
        userInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],

        // 评论内容
        content: { type: String, required: true},

        // 点赞数
        likes_count: { type: Number, default: 0 },

        // 回复评论
        res_comment: { type: Array, default: [] },

        // 创建日期
        create_time: { type: Date, default: Date.now },

        // 最后修改日期
        update_time: { type: Date, default: Date.now },

    }, { versionKey: false });
    return mongoose.model('Comment', CommentSchema);
};
