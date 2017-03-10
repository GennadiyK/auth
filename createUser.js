const User = require('./models/user');

(async() => {
    try {
      await User.create(
        {
          email: 'vania@mail.ru',
          password: 'vania12345'
        },
        {
          email: 'evg12@tut.by',
          password: '123jsldaksdj9'
        },
        {
          email: 'anna88@yandex.ru',
          password: 'asdashd928kslk'
        }
      );
    } catch (err) {
      throw(err);
    }
  }
)();