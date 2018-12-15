const mongoose = require('mongoose');

const Restaurant = require('../models/Restaurant');

const validateRestaurantInput = require('../validation/restaurant');


exports.testRestaurants = (req, res, next) => res.json({ message: 'Restaurants Works' });

exports.getRestaurants = (req, res, next) => {
  Restaurant.find()
    .sort({ date: -1 })
    .exec()
    .then(restaurants => res.status(200).json(restaurants))
    .catch(err => res.status(404).json({ norestaurantsfound: 'No restaurants found' }));
};

exports.getRestaurantById = (req, res, next) => {
  Restaurant.findById(req.params.id)
    .populate('user', ['name', 'image', 'moderator'])
    .exec()
    .then(restaurant => res.status(200).json(restaurant))
    .catch(err => res.status(404).json({ norestaurantfound: 'No restaurant found with that ID' }));
};

exports.postRestaurant = (req, res, next) => {
  const { errors, isValid } = validateRestaurantInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  const newRestaurant = new Restaurant({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    user: req.user.id,
  });
  newRestaurant.save().then(restaurant => res.status(201).json(restaurant));
};

exports.deleteRestaurant = (req, res, next) => { };
