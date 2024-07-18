const OTPModel = require('./models/otpModel');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONNECTION_STRING.replace(
        /<password>/g,
        process.env.DB_PASSWORD
      )
    );
    console.log('Database connected');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

async function main() {
  await connectDb();
  setInterval(async () => {
    const allOTPs = await OTPModel.find();
    const time = new Date();
    allOTPs.forEach(async (otp) => {
      if (time.getTime() >= otp.expirationTime) {
        await OTPModel.deleteOne(otp);
      }
    });
  }, 120000);
}

main();
