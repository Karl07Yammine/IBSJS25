const express = require('express');
const router = express.Router();
const sendFile = require('../Process/sendFile')

const configureEJS = require('../Config/ejsConfig');
configureEJS(express())

router.get('/', async (req, res) => {
    if (req.session.username) {
        sendFile(res, 'guesswho.html')
    }else {
        sendFile(res, 'index.html')
    }
    
});

module.exports = router;