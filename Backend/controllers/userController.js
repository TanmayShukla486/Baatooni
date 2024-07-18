const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// @desc: To register new users for the app
// @access: Public
// @route: POST: /user-api/register
const registerUser = asyncHandler(async (req, res) => {
  const defaultPfp =
    'https://res.cloudinary.com/dcxb97jn7/image/upload/v1721230000/default-pfp.png';
  const { email, mobileNo, username, img, bio, tag, password } = req.body;
  let finalImg, finalBio;
  if (!img) finalImg = defaultPfp;
  else finalImg = img;
  if (!bio) finalBio = 'Being Batooni';
  else finalBio = bio;
  const hashedPassword = await bcrypt.hash(password, 4);
  const newUser = await User.create({
    mobileNo,
    email,
    username,
    img: finalImg,
    bio: finalBio,
    tag,
    password: hashedPassword,
  });
  res.status(200).json({
    status: 'User Created',
    user: newUser,
  });
});

// @desc: Handling the login requests from the frontend
// @access: public
// @route: POST: /user-api/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const retrievedUser = await User.findOne({ email });
  if (
    retrievedUser &&
    (await bcrypt.compare(password, retrievedUser.password))
  ) {
    const accessToken = jwt.sign(
      {
        username: retrievedUser.username,
        mobileNo: retrievedUser.mobileNo,
        email: retrievedUser.email,
        id: retrievedUser.id,
      },
      process.env.ACCESS_SECRET,
      {
        expiresIn: '3m',
      }
    );
    res.status(200).json({
      status: 'Login successful',
      data: {
        username: retrievedUser.username,
        mobileNo: retrievedUser.mobileNo,
        email: retrievedUser.email,
        authToken: accessToken,
      },
    });
  } else {
    res.status(403);
    throw new Error('Password incorrect');
  }
});

module.exports = registerUser;
