// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportParseToken from '../../../app/middleware/parseToken';

declare module 'egg' {
  interface IMiddleware {
    parseToken: typeof ExportParseToken;
  }
}
