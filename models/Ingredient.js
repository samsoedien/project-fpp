const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IngredientSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'uploads/ingredient.jpg',
  },
  nutritions: [
    {
      kcal: {
        type: Number,
        default: 10,
      },
      fats: {
        type: Number,
      },
      carbohydrates: {
        type: Number,
      },
      proteins: {
        type: Number,
      }
    }
  ],
  settings: {
    type: String,
  },
  allergies: {
    type: String,
  },
  familyGroup: {
    type: String,
    default: 'Chocolate',
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Ingredient = mongoose.model('Ingredient', IngredientSchema);

//TODO: Need to set image to required after multer implementation