const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = cb => {
  MongoClient.connect(
    'mongodb+srv://samsoedien:22X0u6XXUKxe4L9i@fpp-cluster-ziafo.gcp.mongodb.net/test?retryWrites=true'
  )
    .then(client => {
      console.log('MongoDB Connected');
      _db = client.db();
      cb(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
