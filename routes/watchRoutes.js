const express = require('express');
const controller = require('../controller/watchController');
const router = express.Router();

router.post('/', controller.addToWatchList);

router.get('/:id', controller.getWatchList );

router.post('/remove', controller.removeWatchList );

module.exports = router;