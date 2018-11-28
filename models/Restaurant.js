const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RestaurantSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Restaurant = mongoose.model('Restaurant', RestaurantSchema);
