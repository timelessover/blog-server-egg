// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlog from '../../../app/controller/blog';
import ExportRegister from '../../../app/controller/register';

declare module 'egg' {
  interface IController {
    blog: ExportBlog;
    register: ExportRegister;
  }
}
