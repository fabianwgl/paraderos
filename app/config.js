const path = require('path');
const dotenv = require('dotenv');

dotenv.config({silent: true, path: path.join(__dirname, '..', '.env')});

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
};
