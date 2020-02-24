import * as egg from 'egg';

export default (app: egg.Application) => {
  require('./router/client')(app)
  require('./router/admin')(app)    
};
