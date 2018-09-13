const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
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
  },
  directions: {
    type: [String],
  },
  recipeImage: {
    type: String,
  },
  printSetting: {
    type: String,
  },
  ingredient: {
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  },
  cadData: {
    type: Object,
  },
  seasonal: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Recipe = mongoose.model('Recipe', RecipeSchema);
