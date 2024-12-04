// userModel.js
const db = require('../config/db');  // Import koneksi database dari db.js

// Fungsi untuk membuat pengguna baru
const createUser = (name, email, password, callback) => {
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return callback(err);
    }
    callback(null, result);
  });
};

// Fungsi untuk menemukan pengguna berdasarkan email
const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, result) => {
    if (err) {
      console.error('Error finding user:', err);
      return callback(err);
    }
    callback(null, result[0]);  // Mengambil user pertama (jika ada)
  });
};

// Fungsi untuk mendapatkan semua pengguna
const getAllUsers = (callback) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error retrieving users:', err);
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = { createUser, findUserByEmail, getAllUsers };
