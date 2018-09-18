const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

// Restaurant Model
const Restaurant = require('../../models/Restaurant');

const validateRestaurantInput = require('../../validation/restaurant');

// @route   GET api/restaurants/test
// @desc    Tests restaurants route
// @access  Public
router.get('/test', (req, res) => res.json({ message: 'Restaurants Works' }));

// @route   GET api/restaurants
// @desc    Get restaurant
// @access  Public
router.get('/', (req, res, next) => {
  Restaurant.find()
  .sort({ date: -1 })
  .exec()
  .then(restaurants => res.status(200).json(restaurants))
  .catch(err => res.status(404).json({ norestaurantsfound: 'No restaurants found' }));
});

// @route   POST api/restaurants
// @desc    Create a restaurant
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const { errors, isValid } = validateRestaurantInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newRestaurant = new Restaurant({
    name: req.body.name,
  });
  newRestaurant.save().then(restaurant => res.status(201).json(restaurant));
});


// @route   GET api/restaurants/:id
// @desc    Get restaurant by id
// @access  Public
router.get('/:id', (req, res, next) => {
  Restaurant.findById(req.params.id)
    .populate('user', ['name', 'avatar'])
    .exec()
    .then(restaurant => res.json(restaurant))
    .catch(err =>
      res.status(404).json({ norestaurantfound: 'No restaurant found with that ID' })
    );
});

module.exports = router;
