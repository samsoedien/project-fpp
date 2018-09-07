module.exports = {
  name: 'fpp-rest-api',
  version: '0.0.1',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  db: {
    uri: 'mongodb://$USERNAME:$PASSWORD@free-shard-00-00-example.mongodb.net:27017,free-shard-00-01-example.mongodb.net:27017,free-shard-00-02-example.mongodb.net:27017/api?ssl=true&replicaSet=free-shard-0&authSource=admin'
  }
}