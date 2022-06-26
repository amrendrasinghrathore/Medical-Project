const express = require('express');

// route for user registeration
const registerUserRouter = express.Router();
// route for doctor registration
const registerDoctorRouter = express.Router();


const registerController = require('../controllers/registerController');

registerUserRouter.post('/', registerController.handleNewUser)
registerDoctorRouter.post('/', registerController.handleNewDoctor)


module.exports = {registerUserRouter, registerDoctorRouter};