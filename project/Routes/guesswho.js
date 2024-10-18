const express = require('express');
const router = express.Router();
const sendFile = require('../Process/sendFile')
const getTopUsers = require('../Process/getTop')

const configureEJS = require('../Config/ejsConfig');
configureEJS(express())

router.get('/', async (req, res) => {
    if (req.session.username) {
        sendFile(res, 'guesswho.html')
    }else {
        sendFile(res, 'index.html')
    }
    
});


router.get('/admin', async (req, res) => {
    if (req.session.username == "leticia" || req.session.username == "Karl07Yammine") {
        sendFile(res, 'guessadmin.html')
    }else {
        sendFile(res, 'guesswho.html')
    }
    
});


router.post('/', async (req, res) => {
    try {
        const topUsers = await getTopUsers(); // Call the function to get top users
        res.status(200).json(topUsers); // Return the top users in JSON format
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving top users', error });
      }
})

module.exports = router;