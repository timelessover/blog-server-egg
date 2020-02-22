import { Controller } from 'egg';

export default class CommentController extends Controller {
 


    async addComment() {
        const { ctx } = this;
        const reuslt = await ctx.service.client.comment.addComment(ctx.request.body);
        ctx.body = reuslt;
    }
    
    async addSubComment() {
        const { ctx } = this;
        const reuslt = await ctx.service.client.comment.addSubComment(ctx.request.body);
        ctx.body = reuslt;
    }
    async getCommentList() {
        const { ctx } = this;
        const reuslt = await ctx.service.client.article.getCategories();
        ctx.body = reuslt;
    }
}
