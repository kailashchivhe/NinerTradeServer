const express = require('express');
const controller = require('../controller/tradeController');
const router = express.Router();

router.get('/', controller.getAllTrades );

router.post('/', controller.createTrade);

router.get('/:id', controller.getTradeById );

router.put('/:id', controller.updateTrade );

router.delete('/:id', controller.deleteTrade );

module.exports = router;