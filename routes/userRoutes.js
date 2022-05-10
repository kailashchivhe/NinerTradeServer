const express = require('express');
const controller = require('../controller/userController');
const {logInLimiter} = require('../middlewares/rateLimiter');
const router = express.Router();

router.post('/signup', controller.createUser );

router.post('/login', logInLimiter, controller.login );

router.get('/trades/:id', controller.getAllUserTrades );

router.post('/info', controller.getUser );

router.get('/info/:id', controller.getUserFromId );

module.exports = router;