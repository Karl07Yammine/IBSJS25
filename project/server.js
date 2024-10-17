const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


// Serve static files from the 'Front End' directory
const frontEndPath = path.join(__dirname, 'Front_End');
app.use(express.static(frontEndPath));

const configureEJS = require('./Config/ejsConfig')
configureEJS(app);

const sessionMiddleware = require('./Config/sessionConfig');
app.use(sessionMiddleware);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Define a route for the root
app.get('/', (req, res) => {
  const loginPath = path.join(frontEndPath, 'index.html');
  res.sendFile(loginPath);
});

const signin = require('./Routes/signin');
app.use('/signin', signin);

const dashboard = require('./Routes/dashboard');
app.use('/dashboard', dashboard);

const createAccount = require('./Routes/createAccount');
app.use('/createAccount', createAccount);

const guesswho = require('./Routes/guesswho');
app.use('/guesswho', guesswho);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});