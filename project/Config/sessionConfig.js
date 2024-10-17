const session = require('express-session');
const MongoStore = require('connect-mongo');

const sessionMiddleware =  session({
    secret: "7a6sgd",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 2 }, // Set secure to true if using HTTPS
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://karlyammine1mongodb:Karl@cluster0.xufgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      collectionName: 'sessions'
    })
  })

  module.exports = sessionMiddleware;