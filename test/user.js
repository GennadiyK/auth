const assert = require('assert');
const User = require('../models/user');

require('mocha');

describe('User Model testing', function(){
  it('should create a user', () => {
    let user = new User();
    assert.equal(typeof user, 'object');
  });
  
  it('should store properties passed when instantiated', () => {
    let userName, user;
    userName = 'james';
    user = new User({userName: userName});
    assert.equal(user.userName, userName);
  });
  
  it('should have an id after being saved', async () => {
    let userName, passport;
    userName = 'james';
    passport = 'secret';
    let user = new User({userName: userName, passport: passport});
    await user.save();
    assert(user.id);
  });
});