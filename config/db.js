// db.js
const mysql = require('mysql2');

// Membuat koneksi dengan Cloud SQL menggunakan Unix socket
const connection = mysql.createConnection({
  host: process.env.CLOUD_SQL_CONNECTION_NAME,  // Cloud SQL instance
  user: process.env.DB_USER,                    // Username database
  password: process.env.DB_PASSWORD,            // Password database
  database: process.env.DB_NAME,                // Nama database
  socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`, // Cloud SQL connection name
});

// Memastikan koneksi berhasil
connection.connect((err) => {
  if (err) {
    console.error('Unable to connect to the database:', err.message);
    process.exit(1);
  }
  console.log('Database connection established successfully');
});

module.exports = connection;
