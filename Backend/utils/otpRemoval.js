const OTP = require('../models/otpModel');

const removeOtp = async (email) => {
  const otp = await OTP.findOne({ email });
  const deletedOtp = await OTP.deleteOne(otp);
  if (!deletedOtp) return false;
  return true;
};

module.exports = removeOtp;
