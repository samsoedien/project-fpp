const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Recipe model
const Recipe = require('../../models/Recipe');

// Validation
const validateRecipeInput = require('../../validation/recipe');

// @route   GET api/recipes/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ message: 'Recipes Works' }));

// @route   GET api/recipes
// @desc    Get recipes
// @access  Public
router.get('/', (req, res) => {
  Recipe.find()
    .sort({ date: -1 })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(404).json({ norecipesfound: 'No recipes found' }));
});

// @route   GET api/recipes/all
// @desc    Get all recipes
// @access  Public
router.get('/all', (req, res) => {
  const errors = {};

  Recipe.find()
    .populate()
    .then(recipes => {
      if (!recipes) {
        errors.norecipe = 'There are no recipes';
        return res.status(404).json(errors);
      }
      res.json(recipes);
    })
    .catch(err => res.status(404).json({ recipe: 'There are no recipes' }));
});

// @route   POST api/recipes
// @desc    Create a recipe
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateRecipeInput(req.body);
  // Check Validation
  if (!isValid) {
    // if any errors, send 400 with errors object
    return res.status(400).json(errors);
  }

  const newRecipe = new Recipe({
    title: req.body.title,
    ingredient: req.body.ingredient
  });

  newRecipe.save().then(recipe => res.json(recipe));
});

module.exports = router;