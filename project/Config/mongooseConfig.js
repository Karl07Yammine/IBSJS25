const mongoose = require('mongoose');

const uri = "mongodb+srv://karlyammine1mongodb:Karl@cluster0.xufgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;