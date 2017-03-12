const mongoose = require('./mongoose');

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  salt: {
    type: String,
    required: true,
    trim: true
  }
},{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);