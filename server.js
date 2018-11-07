const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 4000;
const server = http.createServer(app);

// mongoose
//   .connect('mongodb+srv://samsoedien:7W02CX9LE9QUi7i0@fpp-cluster-ziafo.gcp.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
//   .then(result => {
//     server.listen(port, () => console.log(`Server running on port ${port}`));
//   })
//   .catch(err => console.log(err));

server.listen(port, () => console.log(`Server running on port ${port}`));
