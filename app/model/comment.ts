export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CommentSchema = new Schema(
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
      res_comment: { type: Array, default: [] },

      // 创建日期
      create_time: { type: Date, default: Date.now }
    },
    { versionKey: false }
  );
  return mongoose.model("Comment", CommentSchema);
};
