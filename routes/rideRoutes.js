const express = require('express');
const router = express.Router();
const { getRides, createRide, updateRide, deleteRide } = require('../controllers/rideController');

router.get('/', getRides);
router.post('/', createRide);
router.put('/:id', updateRide); // تأكد من استخدام :id للمعرف
router.delete('/:id', deleteRide); // تأكد من استخدام :id للمعرف

module.exports = router;
