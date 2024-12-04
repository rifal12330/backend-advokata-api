const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const { check } = require('express-validator');

const router = express.Router();

router.post('/register', [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
], register);

router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
