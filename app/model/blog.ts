
import { uid } from '../utils/uuid';

export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const BlogSchema = new Schema({
        // 标题
        title: {
            type: String,
        },

        // 内容
        content: {
            type: String,
        },

        // 用户id
        uuid: {
            type: String,
        },

        // 文章id
        blog_id: {
            type: String,
            default: uid(),
        },
        // 封面

        cover: {
            type: String,
        },

        // 标签分类
        tag_type: {
            type: String,
        },

        // 发布日期
        create_time: { type: Date, default: Date.now },

        // 最后修改日期
        update_time: { type: Date, default: Date.now },
    });
    return mongoose.model('Blog', BlogSchema);
};
