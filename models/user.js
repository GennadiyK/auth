const mongoose = require('./mongoose');

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true
  },
  password: {
    type: String,
    unique: true,
    required: true,
    trin: true
  }
},{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);