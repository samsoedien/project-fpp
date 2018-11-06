const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const Recipe = require('../models/Recipe');

const validateRecipeInput = require('../validation/recipe');

exports.getRecipes = (req, res, next) => {
  Recipe.find()
    .populate('user', ['name', 'avatar'])
    .sort({ date: -1 })
    .exec()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(404).json({ norecipesfound: 'No recipes found' }));
};
exports.getRecipeById = (req, res, next) => {
  Recipe.findById(req.params.id)
    .populate('user', ['name', 'avatar'])
    .exec()
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(404).json({ norecipefound: 'No recipe found with that ID' }));
};
exports.postRecipe = (req, res, next) => {
  console.log(req.file);
  const { errors, isValid } = validateRecipeInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  // const newRecipe = new Recipe({
  //   _id: new mongoose.Types.ObjectId(),
  //   title: req.body.title,
  //   culinary: req.body.culinary,
  //   description: req.body.description,
  //   imageUrl: req.file.path,
  //   user: req.user.id
  // });
  // newRecipe
  //   .save()
  //   .then(recipe => res.status(201).json(recipe))
  //   .catch(err => console.log(err));
};

exports.updateRecipe = (req, res, next) => {
};

exports.deleteRecipe = (req, res, next) => {

};

// exports.postIngredient = (req, res, next) => {
//   Recipe.findOne({ user: req.user.id }).then(recipe => {
//     const newIngredient = {
//       ingredient: req.body.ingredient
//     };
//     // Add to recipe array
//     recipe.ingredients.unshift(newIngredient);
//     recipe.save().then(recipe => res.json(recipe));
//   });
// };


// FIXME: fix file uploads 