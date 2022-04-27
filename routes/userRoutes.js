const express = require('express');
const controller = require('../controller/userController');
const router = express.Router();

router.post('/signup', controller.createUser );

router.post('/login', controller.login );

router.get('/trades/:id', controller.getAllUserTrades );

router.post('/info', controller.getUser );

module.exports = router;