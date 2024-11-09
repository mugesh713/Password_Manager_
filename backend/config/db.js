// db.js
require('dotenv').config();  // Ensure this is at the top
const mongoose = require('mongoose');

const connectDb = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
};

module.exports = { connectDb };
