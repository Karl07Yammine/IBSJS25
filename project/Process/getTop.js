const express = require('express');
const app = express();
const UserModel = require('../Models/User');

const getTopUsers = async () => {
        try {
          const topUsers = await UserModel.find({})
            .sort({ points: -1 }) // Sort by points in descending order
            .limit(10)             // Limit the result to the top 10 users
            .select('username points'); // Select only the username and points fields
          return topUsers;
        } catch (error) {
          console.error('Error fetching top users:', error);
          throw error;
        }
};

module.exports = getTopUsers;