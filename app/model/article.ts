export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ArticleSchema = new Schema(
      {
        // 标题
        title: {
          type: String,
          required: true
        },

        // 关联集合
        category: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
          }
        ],

        // 内容
        content: {
          type: String,
          validate: /\S+/,
          required: true
        },

        // 封面

        cover: {
          type: String
        },

        // 标签分类
        tag_type: {
          type: String
        },

        // 简介
        introduce: {
          type: String,
          required: true
        },

        
        // 发布日期
        create_time: { type: Date, default: Date.now },

        // 最后修改日期
        update_time: { type: Date, default: Date.now },

        // 点赞数
        likes_count: { type: Number, default: 0 },

        // 观看数
        view_count: { type: Number, default: 0 },
        // 评论数
        comment_count: { type: Number, default: 0 },

      },
      { versionKey: false }
    );
    return mongoose.model('Article', ArticleSchema);
};
