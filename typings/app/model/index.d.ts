// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser from '../../../app/model/user';
import ExportAdminArticle from '../../../app/model/admin/article';

declare module 'egg' {
  interface IModel {
    User: ReturnType<typeof ExportUser>;
    Admin: {
      Article: ReturnType<typeof ExportAdminArticle>;
    }
  }
}
