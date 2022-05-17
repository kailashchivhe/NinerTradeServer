const express = require('express');
const controller = require('../controller/userController');
const {logInLimiter} = require('../middlewares/rateLimiter');
const {validatorSignUp, validatorLogin, validateId} = require('../middlewares/validator');
const router = express.Router();

router.post('/signup', validatorSignUp, controller.createUser );

router.post('/login', logInLimiter, validatorLogin, controller.login );

router.get('/trades/:id', validateId, controller.getAllUserTrades );

router.post('/info', controller.getUser );

router.get('/info/:id', validateId, controller.getUserFromId );

module.exports = router;