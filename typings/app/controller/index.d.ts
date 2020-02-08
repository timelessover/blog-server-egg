// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminHome from '../../../app/controller/admin/home';
import ExportClientHome from '../../../app/controller/client/home';

declare module 'egg' {
  interface IController {
    admin: {
      home: ExportAdminHome;
    }
    client: {
      home: ExportClientHome;
    }
  }
}
