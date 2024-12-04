const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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

// Menginisialisasi database jika model belum ada
sequelize.sync()
  .then(() => console.log('Database & tables synced'))
  .catch((err) => console.error('Error syncing database:', err));

module.exports = User;
