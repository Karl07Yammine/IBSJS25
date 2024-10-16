const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'Front End' directory
const frontEndPath = path.join(__dirname, "..", "project", 'Front_End');
app.use(express.static(frontEndPath));

// Define a route for the root
app.get('/', (req, res) => {
  const loginPath = path.join(frontEndPath, 'index.html');
  res.sendFile(loginPath);
});

app.post("/", (req, res) => {
        console.log(req.body.email)
        console.log(req.body.password)
        if(req.body.email === "ibontop@signin.com" && req.body.password === "IBprivilages25"){
                const homePath = path.join(frontEndPath, 'home.html');
                res.sendFile(homePath);
        }
    })

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});