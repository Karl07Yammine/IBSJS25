const mongoose = require('mongoose');
const UserModel = require('../Models/User');

const uri = "mongodb+srv://karlyammine1mongodb:Karl@cluster0.xufgz.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  const dbconnect = async () => {
    await mongoose.connect(uri);
  }
  
  dbconnect()
    .catch((err) => console.error(err))
};

module.exports = connectDB;
