const express = require('express');
const router = express.Router();
const passport = require('passport');

// Restaurant Controller
const restaurantsController = require('../controllers/restaurants');

// @route   GET api/restaurants/test
// @desc    Tests restaurants route
// @access  Public
router.get('/test', restaurantsController.testRestaurants);

// @route   GET api/restaurants
// @desc    Get restaurant
// @access  Public
router.get('/', restaurantsController.getRestaurants);

// @route   POST api/restaurants
// @desc    Create a restaurant
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), restaurantsController.postRestaurant);

// @route   GET api/restaurants/:id
// @desc    Get restaurant by id
// @access  Public
router.get('/:id', restaurantsController.getRestaurantById);

module.exports = router;
