const Driver = require('../models/Driver');

const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDriver = async (req, res) => {
  const { telegramId, name, phoneNumber, carType } = req.body;

  try {
    const newDriver = new Driver({ telegramId, name, phoneNumber, carType });
    await newDriver.save();
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateDriver = async (req, res) => {
  const { id } = req.params;
  const { telegramId, name, phoneNumber, carType } = req.body;

  try {
    const updatedDriver = await Driver.findByIdAndUpdate(id, { telegramId, name, phoneNumber, carType }, { new: true });
    if (!updatedDriver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json(updatedDriver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDriver = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDriver = await Driver.findByIdAndDelete(id);
    if (!deletedDriver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json({ message: 'Driver deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getDrivers,
  createDriver,
  updateDriver,
  deleteDriver
};
