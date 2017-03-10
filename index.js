const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body-parser');
const router = require('koa-router')();
const User = require('./models/user');




router.post('/registr', async (ctx) => {
  try {
    
    let user = await User.findOne({email: ctx.request.body.email});
    
    if( user === null){
      await User.create({
        email: ctx.request.body.email,
        password: ctx.request.body.password
      });
      ctx.body = 'Registered successfully';
    } else {
      ctx.body = 'Such user already exists';
    }
  } catch (err) {
    throw(err);
  }
  
});

router.post('login', async (ctx) => {
  try {
   
    console.log(user);
  } catch (err) {
    throw(err);
  }
  ctx.body = 'ok';
});


app.use(bodyParser());
app.use(router.routes());
app.listen(3000);