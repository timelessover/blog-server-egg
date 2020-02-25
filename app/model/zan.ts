export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ZanSchema = new Schema({
    // 文章id
    article_id: {
      type: String,
      require: true
    },
    // 用户id
    uuid: {
      type: String,
      require: true
    },
    // 用户是否为这篇文章点赞
    iszan:{
        type:Boolean,
        default:false,
    },
    
    // 创建日期
    create_time: { type: Date, default: Date.now },

    // 最后修改日期
    update_time: { type: Date, default: Date.now }
  });
  return mongoose.model("Zan", ZanSchema);
};
