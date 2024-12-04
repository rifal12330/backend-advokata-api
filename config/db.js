const mysql = require('mysql2');
require('dotenv').config();

let db;

try {
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  console.log('Database connected successfully');
} catch (error) {
  console.error('Database connection failed:', error.message);
}

module.exports = db.promise();
