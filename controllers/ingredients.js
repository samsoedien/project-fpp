const mongoose = require('mongoose');

const Ingredient = require('../models/Ingredient');

const validateIngredientInput = require('../validation/ingredient');
const validateNutritionInput = require('../validation/nutrition');

exports.testIngredients = (req, res, next) => res.json({ message: 'Ingredients Works' });

exports.getIngredients = (req, res, next) => {
  Ingredient.find()
    .sort({ date: -1 })
    .populate('user', ['name', 'avatar'])
    .exec()
    .then(ingredients => res.status(200).json(ingredients))
    .catch(err => res.status(404).json({ noingredientsfound: 'No ingredients found' }));
};

exports.getIngredientByID = (req, res, next) => {
  Ingredient.findById(req.params.id)
    .exec()
    .then(ingredient => res.json(ingredient))
    .catch(err => res.status(404).json({ noingredientfound: 'No ingredient found with that ID' }));
};

exports.postIngredient = (req, res, next) => {
  const { errors, isValid } = validateIngredientInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  const newIngredient = new Ingredient({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    image: req.body.image
  });
  newIngredient.save().then(ingredient => res.status(201).json(ingredient));
};

exports.updateIngredient = (req, res, next) => { };

exports.deleteIngredient = (req, res, next) => { };

exports.getNutritions = (req, res, next) => { };

exports.postNutritions = (req, res, next) => {
  const { errors, isValid } = validateNutritionInput(req.body);
  if (!isValid) return res.status(422).json(errors);

  Ingredient.findOne({ user: req.user.id }).then(ingredient => {
    // Should I find on user or ingredient name? Ingredient.findOne({ user: req.user.id }).then(ingredient => {
    const newNutrition = {
      kcal: req.body.kcal
    };

    // Add to nutrition array
    ingredient.nutrition.unshift(newNutrition);
    ingredient.save().then(recipe => res.json(recipe));
  });
};

exports.updateNutritions = (req, res, next) => { };

exports.deleteNutritions = (req, res, next) => { };
