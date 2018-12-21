const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  specifications: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default: 'uploads/recipe.jpg',
  },
  categories: {
    type: [String],
  },
  settings: {
    type: [String],
  },
  printTime: {
    type: String,
    default: '20',
  },
  dimensions: {
    type: String,
  },
  cad: {
    type: String,
  },
  cadText: {
    type: String,
  },
  favorites: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  ingredients: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
      },
    },
  ],
  cadData: {
    type: Object,
  },
  seasonal: {
    type: String,
  },
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

module.exports = Recipe = mongoose.model('Recipe', RecipeSchema);
