const mongoose = require('mongoose');
const date = require('date-and-time');

const OtpSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
    required: true,
    unique: true,
  },
  creationTime: {
    type: Date,
    default: new Date(),
  },
  expirationTime: {
    type: Date,
    default: new Date(date.addMinutes(new Date(), 15)),
  },
});

const OTP = mongoose.model('OTP', OtpSchema);
module.exports = OTP;
