const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const checkInput = asyncHandler(async (req, res, next) => {
  const { email, mobileNo, username, tag, password } = req.body;
  if (!email || !mobileNo || !username || !tag || !password) {
    res.status(400);
    throw new Error('Missing fields or info');
  }
  const existingUser = await User.findOne({ mobileNo });
  if (existingUser) {
    res.status(403);
    throw new Error('User already exists');
  }
  next();
});

module.exports = checkInput;
