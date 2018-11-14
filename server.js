const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 4000;
const server = http.createServer(app);

const URI = require('./config/keys').mongoURI;

mongoose
  .connect(URI, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected');
    server.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => {
    throw new Error(err);
  });
mongoose.Promise = global.Promise;
