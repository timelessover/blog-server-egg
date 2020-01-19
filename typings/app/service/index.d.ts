// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlog from '../../../app/service/blog';
import ExportRegister from '../../../app/service/register';

declare module 'egg' {
  interface IService {
    blog: ExportBlog;
    register: ExportRegister;
  }
}
