const asyncHandler = require('express-async-handler');
require('dotenv').config();
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const OTPModel = require('../models/otpModel');

const transport = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.EMAIL_API_KEY,
    },
  })
);

const generateOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const OTP = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
  });
  const mailSent = await transport.sendMail({
    to: email,
    from: 'tanmay.shukla629@gmail.com',
    subject: 'OTP for account verification',
    html: `<div style="text-align: center; line-height: 1.5; color: #666;">
  <p>Hi there,</p>
  <p>Here is your One-Time Password (OTP) to verify your account with Batooni:</p>
  <p style="font-size: 20px; font-weight: bold;">${OTP}</p>
  <p>This code is valid for 15 minutes. Please do not share it with anyone.</p>
</div>`,
  });
  console.log(mailSent);
  if (mailSent) {
    const otp = {
      email,
      otp: OTP,
    };
    const resp = await OTPModel.create(otp);
    if (resp) {
      res.status(200).json({
        status: 'success',
        message: 'OTP generated',
      });
    } else {
      res.status(400);
      throw new Error('Otp not generated');
    }
  } else {
    res.status(400);
    throw new Error('Otp not generated');
  }
});
const verifyOTP = asyncHandler(async (req, res, next) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    res.status(403);
    throw new Error('Incomplete information');
  }
  const storedOtp = await OTPModel.findOne({ email });
  if (!storedOtp) {
    res.status(403);
    throw new Error('Invalid email address or otp does not exist');
  }
  if (otp === storedOtp.otp) {
    console.log('OTP verified');
    next();
  } else {
    res.status(403);
    throw new Error('Invalid otp');
  }
});

module.exports = { generateOTP, verifyOTP };
