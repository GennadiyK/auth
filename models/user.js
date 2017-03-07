let _ = require('lodash');

let User = function (prop) {
  _.assign(this, prop);
};

module.exports = User;