const connectDB = require('../Config/mongooseConfig');
const express = require('express');
const app = express();
const UserModel = require('../Models/User')

connectDB();

const sessionMiddleware = require('../Config/sessionConfig');
app.use(sessionMiddleware);

async function getUser(username) {
    const user = await UserModel.findOne({username: username})
    if (user) {
        const userData = {
            username: user.username,
            name: user.name,
            password: user.password,
            teacher: user.teacher,
            points: user.points,
        }
        return userData
    } else {

        return false;
    }
    
}

module.exports = getUser;