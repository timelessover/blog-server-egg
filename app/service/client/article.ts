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
    const result = await ctx.model.Article.find({ category: id })
    if (result) {
      return result;
    } else {
      return { code: 1, msg: "获取文章失败" };
    }
  }
}
