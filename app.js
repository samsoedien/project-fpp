const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const passport = require('passport');

const usersRoutes = require('./routes/users');
const profilesRoutes = require('./routes/profiles');
const postsRoutes = require('./routes/posts');
const recipesRoutes = require('./routes/recipes');
const ingredientsRoutes = require('./routes/ingredients');
const threeRoutes = require('./routes/three');
const restaurantsRoutes = require('./routes/restaurants');

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Morgan Middleware
app.use(morgan('dev'));

// Set EJS Middleware
app.set("view engine", "ejs");
app.set("views", "views");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Multer Middleware
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Handling CORS errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// CORS from Nodejs course
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
//   next();
// });

// Use Routes
app.use('/api/users', usersRoutes);
app.use('/api/profiles', profilesRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/recipes', recipesRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/three', threeRoutes);
app.use('/api/restaurants', restaurantsRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

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
  app.use(express.static('client/build'));
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// DB Config
const URI = require('./config/keys').mongoURI;
mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  //.catch(err => console.log(err));
  .catch(err => {
    throw new Error(err);
  });
mongoose.Promise = global.Promise;

module.exports = app;
