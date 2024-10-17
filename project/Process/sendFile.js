const path = require('path');

function sendFile(res, filename){
    const filePath = path.join(__dirname, '../Front_End', filename);
    res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).send('Error sending file');
        }
      });
}

module.exports = sendFile;