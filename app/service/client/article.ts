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
  async updateLikeArticle(content) {
    const { article_id, uid } = content;
    const { ctx } = this;
    const save_zan = await ctx.model.Zan.findOne({
      article_id,
      uid
    });
    const article = await ctx.model.Article.findOne({
      _id: article_id
    });
    if (!save_zan.iszan) {
      await ctx.model.Article.updateOne(
        {
          _id: article_id
        },
        {
          likes_count: article.likes_count + 1
        }
      );
    } else {
      await ctx.model.Article.updateOne(
        {
          _id: article_id
        },
        {
          likes_count: article.likes_count - 1
        }
      );
    }
    await ctx.model.Zan.updateOne(
      {
        article_id,
        uid
      },
      {
        iszan: !save_zan.iszan
      }
    );
    let result = { is_zan: !save_zan.iszan };
    return result;
  }

  async isLikeArticle(content) {
    const { article_id, uid } = content;
    const { ctx } = this;
    const isSave = await ctx.model.Zan.findOne({
      article_id,
      uid
    });
    let result;
    if (!isSave) {
      const zan = await new ctx.model.Zan(content).save();
      result = { is_zan: zan.iszan };
    } else {
      result = { is_zan: isSave.iszan };
    }
    return result;
  }
}
