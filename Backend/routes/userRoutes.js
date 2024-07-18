const express = require('express');
const preRegisterCheck = require('../middleware/preRegisterCheck');
const registerUser = require('../controllers/userController');
const { generateOTP, verifyOTP } = require('../middleware/otpHandler');

const router = express.Router();

router
  .route('/register')
  .get(preRegisterCheck, generateOTP)
  .post(verifyOTP, registerUser);

module.exports = router;
