const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  culinary: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  ingredient: {
    type: String,
    required: true
  },
  recipeImage: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);
