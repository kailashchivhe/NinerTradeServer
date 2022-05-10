const express = require('express');
const controller = require('../controller/offerController');
const router = express.Router();

router.get('/:id', controller.getUserOffers );

router.get('/request/:id', controller.getOfferRequests );

router.post('/', controller.requestOffer );

router.post('/accept', controller.acceptOffer );

router.post('/decline', controller.declineOffer );

module.exports = router;