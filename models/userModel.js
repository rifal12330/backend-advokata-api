// userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Import koneksi dari db.js

// Mendefinisikan model User
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Pastikan email bersifat unik
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',  // Nama tabel pada database
  timestamps: true,    // Menyimpan createdAt dan updatedAt
});

// Membuat tabel jika belum ada dan mensinkronkan dengan database
sequelize.sync({ force: false })  // `force: false` untuk tidak menghapus data yang ada
  .then(() => console.log('Database & tables synced'))
  .catch((err) => console.error('Error syncing database:', err));

module.exports = User;
