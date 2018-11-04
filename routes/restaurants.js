const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

// Restaurant Controller
const restaurantController = require('../controllers/restaurants');

// @route   GET api/restaurants/test
// @desc    Tests restaurants route
// @access  Public
router.get('/test', restaurantController.testRestaurant);

// @route   GET api/restaurants
// @desc    Get restaurant
// @access  Public
router.get('/', restaurantController.getRestaurants);

// @route   POST api/restaurants
// @desc    Create a restaurant
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  restaurantController.postRestaurant
);

// @route   GET api/restaurants/:id
// @desc    Get restaurant by id
// @access  Public
router.get('/:id', restaurantController.getRestaurantById);

module.exports = router;
