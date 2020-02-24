// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/model/admin';
import ExportArticle from '../../../app/model/article';
import ExportCategory from '../../../app/model/category';
import ExportComment from '../../../app/model/comment';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Admin: ReturnType<typeof ExportAdmin>;
    Article: ReturnType<typeof ExportArticle>;
    Category: ReturnType<typeof ExportCategory>;
    Comment: ReturnType<typeof ExportComment>;
    User: ReturnType<typeof ExportUser>;
  }
}
