// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/service/admin';
import ExportBlog from '../../../app/service/blog';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    admin: ExportAdmin;
    blog: ExportBlog;
    user: ExportUser;
  }
}
