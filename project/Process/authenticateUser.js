const connectDB = require('../Config/mongooseConfig');
const express = require('express');
const app = express();
const UserModel = require('../Models/User');
const getUser = require('./findUser');

connectDB();

async function authenticateUser(username, password) {
    const userData = await getUser(username);
    if (userData == false){
        return 'nouser';
    } else if (userData.password == password){
        return true;
    }else {
        return 'wrongpassword';
    }
    
}

module.exports = authenticateUser;