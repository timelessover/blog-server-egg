// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminUser from '../../../app/service/admin/user';
import ExportClientArticle from '../../../app/service/client/article';
import ExportClientUser from '../../../app/service/client/user';

declare module 'egg' {
  interface IService {
    admin: {
      user: ExportAdminUser;
    }
    client: {
      article: ExportClientArticle;
      user: ExportClientUser;
    }
  }
}
