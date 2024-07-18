const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDb = require('./utils/connectDb');
// const otpService = require('./utils/otpService');
const errorHandler = require('./middleware/errorHandler');
const userRouter = require('./routes/userRoutes');

dotenv.config();
const server = express();

const PORT = process.env.PORT;

(async function () {
  await connectDb();
  //   await otpService();
})();

server.use(cors());
// middleware for request body parsing
server.use(express.json());
server.use('/user-api', userRouter);
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
