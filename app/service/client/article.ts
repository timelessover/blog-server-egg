import { Service } from 'egg';
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
    const result = await new ctx.model.Blog(blog).save();
    if (result) {
      return { code: 0, msg: '创建成功' };
    } else {
      return { status: 1, msg: '创建失败' };
    }
  }
  async update(blog) {
    const { blog_id, uuid } = blog;
    blog.update_time = Date.now();
    const { ctx } = this;
    const result = await ctx.model.Blog.findOneAndUpdate({ uuid, blog_id }, blog);
    if (result) {
      return { code: 0, msg: '更新成功' };
    } else {
      return { status: 1, msg: '更新失败' };
    }
  }
  async delete(content) {
    const { ctx } = this;
    const { blog_id, uuid } = content;
    const result = await ctx.model.Blog.findOneAndRemove({ blog_id, uuid });
    if (result) {
      return { code: 0, msg: '删除成功' };
    } else {
      return { status: 1, msg: '删除失败' };
    }
  }
  async getTagList(content) {
    const { ctx } = this;
    const { uuid } = content;
    const blogs = await ctx.model.Blog.find({ uuid });
    const result = {};
    blogs.forEach(blog => {
      if (result[blog.tag_type]) {
        result[blog.tag_type]++;
      } else {
        result[blog.tag_type] = 1;
      }
    });
    const temp: any = [];
    for (const [ key, value ] of Object.entries(result)) {
      temp.push({ tag_type: key, pages: value } as any);
    }
    temp.sort((a, b) => b.pages - a.pages);
    return temp;
  }
  async findTagList(content) {
    const { ctx } = this;
    const { tag_type, uuid } = content;
    const result = await ctx.model.Blog.find({ tag_type, uuid });
    return result;
  }
}
