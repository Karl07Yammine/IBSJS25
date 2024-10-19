const express = require('express');
const cloudinary = require('cloudinary').v2;
const connectDB = require('../Config/mongooseConfig');
const GuessModel = require('../Models/guesses');
const router = express.Router();
const sendFile = require('../Process/sendFile')
connectDB();

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dv8kcv3jq',
    api_key: '776776531183923',
    api_secret: 'g0gGsbPL140v9vedmt6uORjtz_s'
});

let url = null;

router.post('/', async (req, res) => {

    // Check if files were uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Access the uploaded file
    const imageFile = req.files.image;

    try {
        // Upload the file to Cloudinary using its data (buffer)
        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
                if (error) return reject(error);
                resolve(result);
            });

            // Upload the file data (buffer) via the stream
            uploadStream.end(imageFile.data);
        });

        url = result.secure_url;


        // Save to MongoDB (or other database) after successful upload
        let link = url;
        let author = req.body.author;
        let answer = req.body.answer;
        const Guess = new GuessModel({ link, author, answer });
        await Guess.save();
        
        sendFile(res, 'guesswho.html')
        
    } catch (error) {
        res.status(500).json({ error: 'Image upload failed', details: error });
    }
});

module.exports = router;
