const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body-parser');
const router = require('koa-router')();
const mongoose = require('./models/mongoose');
const User = require('./models/user');


router.post('/', async (ctx) => {
  try {
    let name = ctx.request.body.name;
    let  password = ctx.request.body.password;
    let user = await User.create({
      name: ctx.request.body.name,
      password: ctx.request.body.password
    });
    console.log(user);
  } catch (err) {
    throw(err);
  }
  ctx.body = 'ok';
});


app.use(bodyParser());
app.use(router.routes());
app.listen(3000);