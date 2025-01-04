const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

// POST /login
router.post('/login', authController.postLogin);

// POST /create-account
router.post('/create-account', authController.postCreateAccount);

module.exports = router;