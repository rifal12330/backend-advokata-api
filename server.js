const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(helmet());
app.use('/api/auth', authRoutes);

// Database synchronization
(async () => {
  try {
    await sequelize.sync(); // Automatically creates tables based on models
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error syncing database:', error.message);
  }
})();

// Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
