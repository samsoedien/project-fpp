const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  headline: {
    type: String,
    required: true,
    unique: true,
  },
  article: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'database/images/pastry.jpg',
  },
  favorites: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  posts: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      comment: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      likes: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
          },
        },
      ],
      flags: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
          },
        },
      ],
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Blog = mongoose.model('Blog', BlogSchema);
