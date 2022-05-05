require('dotenv').config();
module.exports = {
  database: {
    host: process.env.DB_HOST || '',
    dbName: process.env.DB_NAME || '',
    dbUser: process.env.DB_USER || '',
    dbPass: process.env.DB_PASS || ''
  }
}