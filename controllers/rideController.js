const Ride = require('../models/Ride');

const getRides = async (req, res) => {
  try {
    const { driver, driverPhone, userPhone, date } = req.query;
    const query = {};

    if (driver) query.driverName = { $regex: driver, $options: 'i' };
    if (driverPhone) query.driverPhone = driverPhone;
    if (userPhone) query.userPhone = userPhone;
    if (date) query.createdAt = { $gte: new Date(date), $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)) };

    const rides = await Ride.find(query);
    res.json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRide = async (req, res) => {
  const { userId, driverId, pickupLocation, dropoffLocation, status } = req.body;

  try {
    const newRide = new Ride({ userId, driverId, pickupLocation, dropoffLocation, status });
    await newRide.save();
    res.status(201).json(newRide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateRide = async (req, res) => {
  const { id } = req.params;
  const { userId, driverId, pickupLocation, dropoffLocation, status } = req.body;

  try {
    const updatedRide = await Ride.findByIdAndUpdate(id, { userId, driverId, pickupLocation, dropoffLocation, status }, { new: true });
    if (!updatedRide) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    res.json(updatedRide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteRide = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRide = await Ride.findByIdAndDelete(id);
    if (!deletedRide) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    res.json({ message: 'Ride deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getRides,
  createRide,
  updateRide,
  deleteRide
};
