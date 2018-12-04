const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  heading: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Blog = mongoose.model('Blog', BlogSchema);
