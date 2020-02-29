export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CommentzanSchema = new Schema({
    comment_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true
    },
    // 用户id
    uid: {
      type: mongoose.Schema.Types.ObjectId,
      require: true
    },
    // 当前用户是否喜欢

    isLiked: { type: Boolean, default: true },

    // 创建日期
    create_time: { type: Date, default: Date.now },

    // 最后修改日期
    update_time: { type: Date, default: Date.now }
  });
  return mongoose.model("Commentzan", CommentzanSchema);
};
