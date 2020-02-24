// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminAdmin from '../../../app/service/admin/admin';
import ExportAdminArticle from '../../../app/service/admin/article';
import ExportAdminCategory from '../../../app/service/admin/category';
import ExportClientArticle from '../../../app/service/client/article';
import ExportClientComment from '../../../app/service/client/comment';
import ExportClientUser from '../../../app/service/client/user';

declare module 'egg' {
  interface IService {
    admin: {
      admin: ExportAdminAdmin;
      article: ExportAdminArticle;
      category: ExportAdminCategory;
    }
    client: {
      article: ExportClientArticle;
      comment: ExportClientComment;
      user: ExportClientUser;
    }
  }
}
