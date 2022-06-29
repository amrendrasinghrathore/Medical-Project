const express = require('express');

const loginRouter = express.Router();

const loginController = require('../controllers/loginController');

loginRouter.use('/', loginController.handleLogin);

module.exports = { loginRouter };

