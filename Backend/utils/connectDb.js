const mongoose = require('mongoose');

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

module.exports = connectDb;
