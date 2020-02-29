// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/model/admin';
import ExportArticle from '../../../app/model/article';
import ExportCategory from '../../../app/model/category';
import ExportComment from '../../../app/model/comment';
import ExportCommentzan from '../../../app/model/commentzan';
import ExportReply from '../../../app/model/reply';
import ExportUser from '../../../app/model/user';
import ExportZan from '../../../app/model/zan';

declare module 'egg' {
  interface IModel {
    Admin: ReturnType<typeof ExportAdmin>;
    Article: ReturnType<typeof ExportArticle>;
    Category: ReturnType<typeof ExportCategory>;
    Comment: ReturnType<typeof ExportComment>;
    Commentzan: ReturnType<typeof ExportCommentzan>;
    Reply: ReturnType<typeof ExportReply>;
    User: ReturnType<typeof ExportUser>;
    Zan: ReturnType<typeof ExportZan>;
  }
}
