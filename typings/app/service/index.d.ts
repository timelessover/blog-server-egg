// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminArticle from '../../../app/service/admin/article';
import ExportAdminCategory from '.../../../app/service/admin/category
import ExportAdminUser from '../../../app/service/admin/user';
import ExportClientArticle from '../../../app/service/client/article';
import ExportClientUser from '../../../app/service/client/user';

declare module 'egg' {
  interface IService {
    admin: {
      article: ExportAdminArticle;
      category: ExportAdminCategory;
      user: ExportAdminUser;
    }
    client: {
      article: ExportClientArticle;
      user: ExportClientUser;
    }
  }
}
