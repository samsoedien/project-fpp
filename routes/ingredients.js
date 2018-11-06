const express = require('express');
const router = express.Router();
const passport = require('passport');

const ingredientsController = require('../controllers/ingredients');

// @route   GET api/ingredients/test
// @desc    Tests ingredients route
// @access  Public
router.get('/test', ingredientsController.testIngredients);

// @route   GET api/ingredients
// @desc    Get ingredients
// @access  Public
router.get('/', ingredientsController.getIngredients);

// @route   GET api/ingredients/:id
// @desc    Get ingredient by id
// @access  Public
router.get('/:id', ingredientsController.getIngredientByID);

// @route   POST api/ingredients
// @desc    Create a ingredient
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), ingredientsController.postIngredient);

router.patch('/:id', passport.authenticate('jwt', { session: false }), ingredientsController.updateIngredient);

router.delete('/:id', passport.authenticate('jwt', { session: false }), ingredientsController.deleteIngredient);


// GET api/ingredients/nutritions
// @desc    Create a nutritions dataset
// @access  Public
router.get('/nutritions', ingredientsController.getNutritions);

// POST api/ingredients/nutritions
// @desc    Create a nutritions dataset
// @access  Private
router.post('/nutritions', passport.authenticate('jwt', { session: false }), ingredientsController.postNutritions);

router.patch('/nutritions/:id', passport.authenticate('jwt', { session: false }), ingredientsController.updateNutritions);

router.delete('/nutritions/:id', passport.authenticate('jwt', { session: false }), ingredientsController.deleteNutritions);



module.exports = router;
