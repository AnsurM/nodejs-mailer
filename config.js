// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  mailtrapConfig: {
    host: process.env.MAILTRAPHOST,
    port: process.env.MAILTRAPPORT,
    auth: {
      user: process.env.MAILTRAPUSER,
      pass: process.env.MAILTRAPPASS
    }
  }
};
