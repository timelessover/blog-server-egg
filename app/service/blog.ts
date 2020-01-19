import { Service } from 'egg';
import { uid } from '../utils/uuid';

/**
 * Blog Service
 */
export default class BlogService extends Service {

  async getAllBlog(id) {
    const { ctx } = this;
    const { uuid } = id;
    const result = ctx.model.Blog.find({ uuid });
    return result;
  }

  async create(blog) {
    const { ctx } = this;
    blog.blogId = uid();
    const result = await new ctx.model.Blog(blog).save();
    if (result) {
      return { code: 0, msg: '创建成功' };
    } else {
      return { status: 1, msg: '创建失败' };
    }
  }
  async update(blog) {
    const { uuid } = blog;
    const { ctx } = this;
    const result = await ctx.model.Blog.findOneAndUpdate({ uuid }, blog);
    if (result) {
      return { code: 0, msg: '更新成功' };
    } else {
      return { status: 1, msg: '更新失败' };
    }
  }
  async delete(conent) {
    const { ctx } = this;
    const { blogId, uuid } = conent;
    const result = await ctx.model.Blog.findOneAndRemove({ blogId, uuid });
    if (result) {
      return { code: 0, msg: '删除成功' };
    } else {
      return { status: 1, msg: '删除失败' };
    }
  }
}
