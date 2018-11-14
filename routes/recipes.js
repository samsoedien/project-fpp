const express = require('express');
const passport = require('passport');

const recipesController = require('../tests/controllers/recipes');

const router = express.Router();

// @route   GET api/recipes/test
// @desc    Tests recipes route
// @access  Public
router.get('/test', (req, res) => res.json({ message: 'Recipes Works' }));

// @route   GET api/recipes
// @desc    Get recipes
// @access  Public
router.get('/', recipesController.getRecipes);

// @route   GET api/recipes/:id
// @desc    Get recipe by id
// @access  Public
router.get('/:id', recipesController.getRecipeById);

// @route   POST api/recipes
// @desc    Create a recipe
// @access  Private
// router.post('/', passport.authenticate('jwt', { session: false }), upload.single('recipeImage'), recipesController.postRecipe);

router.post('/', passport.authenticate('jwt', { session: false }), recipesController.postRecipe);

router.patch('/:id', passport.authenticate('jwt', { session: false }), recipesController.updateRecipe);

router.delete('/:id', passport.authenticate('jwt', { session: false }), recipesController.deleteRecipe);

module.exports = router;

// FIXME: temp test controller