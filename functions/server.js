const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const connectDB = require('../database');
const config = require('../config');
const userRoutes = require('../routes/userRoutes');
const driverRoutes = require('../routes/driverRoutes');
const rideRoutes = require('../routes/rideRoutes');

const Driver = require('../models/Driver'); 
const User = require('../models/User'); 
const Ride = require('../models/Ride'); 

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/rides', rideRoutes);

app.get('/api/dashboard/summary', async (req, res) => {
  try {
    const driversCount = await Driver.countDocuments();
    const customersCount = await User.countDocuments();
    const ridesCount = await Ride.countDocuments();
    
    res.json({ drivers: driversCount, customers: customersCount, rides: ridesCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// const port = config.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

module.exports.handler = serverless(app);
