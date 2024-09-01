const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  telegramId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  carType: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
