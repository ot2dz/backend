require('dotenv').config();

module.exports = {
  MONGODB_URI: 'mongodb+srv://taxi2bot:a19901990@taxibot.xl92t.mongodb.net/?retryWrites=true&w=majority&appName=TaxiBot',
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT || 4000
};
