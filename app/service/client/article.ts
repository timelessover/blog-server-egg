import { Service } from "egg";
/**
 *  Article Service
 */
export default class ArticleService extends Service {
  async getAllArticle() {
    const { ctx } = this;
    const result = ctx.model.Article.find()
      .populate("category")
      .exec();
    return result;
  }

  async getCategories() {
    const { ctx } = this;
    const result = await ctx.model.Category.find()
      .sort({ article_num: -1 })
      .exec();
    return result;
  }
  async getArticleById(id) {
    const { ctx } = this;
    const result = await ctx.model.Article.findOne({ _id: id })
      .populate("category")
      .exec();
    if (result) {
      return result;
    } else {
      return { code: 1, msg: "获取文章失败" };
    }
  }
  async getArticleList(id) {
    const { ctx } = this;
    const category_res = await ctx.model.Category.findOne({
      _id: id
    });
    const result = await ctx.model.Article.find({ category: id })
      .populate({ path: "category", select: "name" })
      .exec();
    if (result) {
      return { data: result, categroy: category_res };
    } else {
      return { code: 1, msg: "获取文章失败" };
    }
  }
  //  async addLikeCount(id) {
  //    const { ctx } = this;
  //    const article = await ctx.model.Article.find({ _id: id })
  //    const res = await ctx.model.Comment.updateOne(
  //      {  _id: id  },
  //      {
  //        like_count: article.like_count + 1
  //      }
  //    );
  //    return 'ok'
  //  }
}
