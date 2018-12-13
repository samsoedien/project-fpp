const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  avatar: {
    type: String,
  },
  profession: {
    type: String,
    required: true,
  },
  reputation: {
    type: String,
    default: 'Apprentice',
  },
  location: {
    type: String,
  },
  skills: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);