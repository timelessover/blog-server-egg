import { Service } from 'egg';
/**
 * Category Service
 */
export default class CategoryService extends Service {

    async add(name) {
        const { ctx } = this;
        const result = await new ctx.model.Category(name).save();
        if (result) {
            return { code: 0, msg: '创建成功' };
        } else {
            return { code: 1, msg: '创建失败' };
        }
    }

    
    async getCategories() {
        const { ctx } = this;
        const result = await ctx.model.Category.find();
        return result;
    }

    
    async getCategoryById(id) {
        const { ctx } = this;
        const result = await ctx.model.Category.findOne({_id:id });
        if (result) {
            return result;
        } else {
            return { code: 1, msg: '获取分类信息失败' };
        }
    }
    async update(content) {
        const { _id } = content;
        content.update_time = Date.now();
        const { ctx } = this;
        const result = await ctx.model.Category.findOneAndUpdate({ _id }, content);
        if (result) {
            return { code: 0, msg: '更新成功' };
        } else {
            return { code: 1, msg: '更新失败' };
        }
    }
    async delete(id) {
        const { ctx } = this;
        const result = await ctx.model.Category.findOneAndRemove({ _id: id });
        if (result) {
            return { code: 0, msg: '删除成功' };
        } else {
            return { code: 1, msg: '删除失败' };
        }
    }
}
