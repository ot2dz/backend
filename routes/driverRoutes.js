const express = require('express');
const router = express.Router();
const { getDrivers, createDriver, updateDriver, deleteDriver } = require('../controllers/driverController');

router.get('/', getDrivers);
router.post('/', createDriver);
router.put('/:id', updateDriver); // تأكد من استخدام :id للمعرف
router.delete('/:id', deleteDriver); // تأكد من استخدام :id للمعرف

module.exports = router;
