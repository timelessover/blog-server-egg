// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlog from '../../../app/model/blog';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Blog: ReturnType<typeof ExportBlog>;
    User: ReturnType<typeof ExportUser>;
  }
}
