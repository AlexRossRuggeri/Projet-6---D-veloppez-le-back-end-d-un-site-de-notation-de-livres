require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connexion à MongoDB réussie !');
  } catch (err) {
    console.error('Connexion à MongoDB échouée !', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
