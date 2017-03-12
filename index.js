const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body-parser');
const router = require('koa-router')();
const User = require('./models/user');
const crypto = require('crypto');
const hash = crypto.createHash('sha512');

router.post('/registr', async (ctx) => {
  try {
      let salt = 'salt1';
      let password = ctx.request.body.password + salt;
      await User.create({
        email: ctx.request.body.email,
        password:  hash.update(password).digest("hex"),
        salt: salt
      });
      ctx.body = 'Registered successfully';
    
  } catch (err) {
    if(err.code === 11000) {
      ctx.throw(409, 'User already exists');
    }
    throw(err);
  }
  
});

router.post('/login', async (ctx) => {
  try {
    let user = await User.findOne({email: ctx.request.body.email});
        
    if(user && passwordHash.verify(ctx.request.body.password, user.password)) {
      ctx.status = 200;
      ctx.body = 'Loggined';
    } else {
      ctx.throw(401, 'You are not registered user');
    }
  } catch (err) {
    throw(err);
  }
 
});


app.use(bodyParser());
app.use(router.routes());
app.listen(3000);