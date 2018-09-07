const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const multer = require('multer');
const path = require('path');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const recipes = require('./routes/api/recipes');

// Init app
const app = express();

// Morgan Middleware
app.use(morgan('dev'));

// Multer Middleware
app.use('/uploads', express.static('uploads'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handling CORS errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// DB Config
const uri = require('./config/keys').mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(uri)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// mongoose.connect(
//   "",
//   {
//     useMongoClient: true
//   }
// );
// mongoose.Promise = global.Promise;

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});


// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/recipes', recipes);

// Morgan setup 
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;

//TODO: Organise middleware more cleanly and implement MongoDB atlas database over mlab