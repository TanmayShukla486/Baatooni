const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A username is required to create a profile'],
  },
  email: {
    type: String,
    required: [true, 'An email is required for registration'],
  },
  password: {
    type: String,
    required: [true, 'A password is a necessity'],
  },
  mobileNo: {
    type: String,
    required: [true, 'A mobile number is required for registration'],
    unique: true,
  },
  img: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  tag: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
