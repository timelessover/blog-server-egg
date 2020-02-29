export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ReplySchema = new Schema({
    comment_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    // 回复这个评论的主人
    res_userInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // 谁在评论
    top_userInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // 被赞数
    likes_count: { type: Number, default: 0 },

    // 当前用户是否喜欢

    isLiked: { type: Boolean, default: false },

    // content
    content: { type: String, required: true, validate: /\S+/ },

    // 状态 => 0 待审核 / 1 通过正常 / -1 已删除 / -2 垃圾评论
    state: { type: Number, default: 1 },

    // 创建日期
    create_time: { type: Date, default: Date.now }
  });
  return mongoose.model("Reply", ReplySchema);
};
