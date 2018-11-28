const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const profilesRoutes = require('./routes/profiles');
const postsRoutes = require('./routes/posts');
const recipesRoutes = require('./routes/recipes');
const ingredientsRoutes = require('./routes/ingredients');
const threeRoutes = require('./routes/three');
const restaurantsRoutes = require('./routes/restaurants');
const blogsRoutes = require('./routes/blogs');

const app = express();

const storage = multer.diskStorage({
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
app.set('view engine', 'ejs');
app.set('views', 'views');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Multer Middleware
app.use(multer({ storage, fileFilter }).single('image'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Handling CORS errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/profiles', profilesRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/recipes', recipesRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/three', threeRoutes);
app.use('/api/restaurants', restaurantsRoutes);
app.use('/api/blogs', blogsRoutes);

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
      message: error.message,
    },
  });
});

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
