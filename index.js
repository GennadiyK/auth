const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
// const mongoose = require('./models/mongoose');
// const User = require('./models/user');


router.post('/', async (ctx) => {
  ctx.body = 'ok';
});

app.use(router.routes());
app.listen(3000);