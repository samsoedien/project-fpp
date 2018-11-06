const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const multer = require('multer');
const path = require('path');

const mongoConnect = require('./config/database');

const usersRoutes = require('./routes/users');
const profilesRoutes = require('./routes/profiles');
const postsRoutes = require('./routes/posts');
const recipesRoutes = require('./routes/recipes');
const ingredientsRoutes = require('./routes/ingredients');
const threeRoutes = require('./routes/three');
const restaurantsRoutes = require('./routes/restaurants');

const errorsControllers = require('./controllers/errors');

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '/uploads');
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image.png' || file.mimetype === 'image.jpg' || file.mimetype === 'image.jpeg') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// }

// Init app
const app = express();

// Morgan Middleware
app.use(morgan('dev'));

// Set EJS Middleware
app.set("view engine", "ejs");
app.set("views", "views");

// Multer Middleware
app.use('/uploads', express.static('uploads'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Multer middleware
//app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));

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

// DB Config
const URI = require('./config/keys').mongoURI;
// const options = {
//   useNewUrlParser: true
// };
mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  //.catch(err => console.log(err));
  .catch(err => {
    throw new Error(err);
  });
mongoose.Promise = global.Promise;

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', usersRoutes);
app.use('/api/profiles', profilesRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/recipes', recipesRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/three', threeRoutes);
app.use('/api/restaurants', restaurantsRoutes);

app.get('/500', errorsControllers.get500);
app.use(errorsControllers.get404);

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

// mongoConnect(() => {
//   app.listen(3000);
// });

module.exports = app;

//TODO: Organise middleware more cleanly
//TODO: Optimise MongoDB Atlas URI connection, limited support by using mongoose api need to reconsider if using MongoClient driver gives relaible results.
