const express = require('express');
const app = express();
const router = express.Router();

const { authController } = require('../controllers/index.js');
const { authMiddleware } = require('../middlewares/index.js');

// * Login User
router.post('/login', authMiddleware.getUserLogin, authController.login);

// * Logout User
router.get('/logout', authController.logout);

// * Refresh Token
router.get('/refresh', authController.refreshToken);

app.use('/auth', router);

module.exports = app;
