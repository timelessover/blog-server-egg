// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminArticle from '../../../app/controller/admin/article';
import ExportAdminCategory from '../../../app/controller/admin/category';
import ExportAdminHome from '../../../app/controller/admin/home';
import ExportClientHome from '../../../app/controller/client/home';

declare module 'egg' {
  interface IController {
    admin: {
      article: ExportAdminArticle;
      category: ExportAdminCategory;
      home: ExportAdminHome;
    }
    client: {
      home: ExportClientHome;
    }
  }
}
