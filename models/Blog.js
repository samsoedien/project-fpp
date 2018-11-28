const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Blog = mongoose.model('Blog', BlogSchema);
