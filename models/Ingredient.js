const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IngredientSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  nutritions: [
    {
      kcal: {
        type: String,
      },
      fats: {
        type: String,
      },
      carbohydrates: {
        type: String,
      },
      proteins: {
        type: String,
      },
      allergies: {
        type: String,
      }
    }
  ],
  printSettings: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Ingredient = mongoose.model('Ingredient', IngredientSchema);
