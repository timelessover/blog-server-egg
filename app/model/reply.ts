export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ReplySchema = new Schema(
      {
        // 文章id
        article_id: { type: mongoose.Schema.Types.ObjectId, required: true },

        // 用户
        uid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true
        },

        // 评论内容
        content: { type: String, required: true },

        // 点赞数
        likes_count: { type: Number, default: 0 },

        // 当前用户是否喜欢

        isLiked: { type: Boolean, default: false },

        // 回复评论
        res_comment: [
          {
            // 被评论者
            res_userInfo: {
              username: { type: String },
              avatar: { type: String }
            },

            // 谁在评论
            user: {
              username: { type: String },
              avatar: { type: String }
            },

            // 被赞数
            likes: { type: Number, default: 0 },

            // content
            content: { type: String, required: true, validate: /\S+/ },

            // 状态 => 0 待审核 / 1 通过正常 / -1 已删除 / -2 垃圾评论
            state: { type: Number, default: 1 },

            // 创建日期
            create_time: { type: Date, default: Date.now }
          }
        ],

        // 创建日期
        create_time: { type: Date, default: Date.now }
      },
      { versionKey: false }
    );
    return mongoose.model('Reply', ReplySchema);
};
