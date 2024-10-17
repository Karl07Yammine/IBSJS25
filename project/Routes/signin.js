const express = require('express');
const router = express.Router();
const sendFile = require('../Process/sendFile')
const authenticateUser = require('../Process/authenticateUser')
const app = express();

const sessionMiddleware = require('../Config/sessionConfig');
app.use(sessionMiddleware);

router.post('/', async (req, res) => {
    try {
        const {username, password} = req.body;
        const result = await authenticateUser(username, password);
        if (result == 'nouser'){
            return res.status(400).json({ error: "Username not found" });
        }else if (result == 'wrongpassword'){
            return res.status(400).json({ error: "Incorrect Password" });
        } else if (result == true) {
            req.session.username = username;
            res.status(200).json({ message: "Login successful" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;