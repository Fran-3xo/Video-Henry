//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, ...models } = require('./src/db.js');
require('dotenv').config();
const {USER_ADMIN, DEVELOPMENT} = process.env
conn.sync().then(() => {
  // Syncing the models.
  const syncModels = [];
  if(DEVELOPMENT){
    for(let model in models){
       syncModels.push(models[model].sync({force:true}));
    }
  }
  return Promise.all(syncModels)
}).then(() => {
  // Creando Administrador
  return models.Usuario.findOrCreate({
    where: {
      username: USER_ADMIN
    },
    defaults:{
      username: USER_ADMIN,
      rol: "director",
    },
  });
}).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}).catch(err => {
  console.log(err) // eslint-disable-line no-console
})
