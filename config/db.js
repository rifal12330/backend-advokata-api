const { Sequelize } = require('sequelize');

// Membuat koneksi dengan Cloud SQL menggunakan Unix socket
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`, // Menggunakan Cloud SQL connection name
  dialect: 'mysql', // Database yang digunakan
  logging: false,  // Nonaktifkan logging SQL jika tidak dibutuhkan
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
})();

module.exports = sequelize;
