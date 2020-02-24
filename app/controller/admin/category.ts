import { Controller } from 'egg';

export default class CategoryController extends Controller {
    async addCategory() {
        const { ctx } = this;
        const category = ctx.request.body;
        const result = await ctx.service.admin.category.add(category);
        ctx.body = result;
    }

    async getCategories() {
        const { ctx } = this;
        const result = await ctx.service.admin.category.getCategories();
        ctx.body = result;
    }

    async deleteCategory() {
        const { ctx } = this;
        const { _id } = ctx.request.body
        const result = await ctx.service.admin.category.delete(_id);
        ctx.body = result;
    }

    async getCategoryById() {
        const { ctx } = this;
        const { _id } = ctx.request.body
        const result = await ctx.service.admin.category.getCategoryById(_id);
        ctx.body = result;
    }


    async updateCategory() {
        const { ctx } = this;
        const result = await ctx.service.admin.category.update(ctx.request.body);
        ctx.body = result;
    }

}
