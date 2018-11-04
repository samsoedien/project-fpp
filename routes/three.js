const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

// Recipe Model
const Three = require('../models/Three');

// Validation
const validateThreeInput = require('../validation/three');

// @route   GET api/three/test
// @desc    Tests recipes route
// @access  Public
router.get('/test', (req, res) => res.json({ message: 'Three Routes Works' }));

// @route   GET api/three
// @desc    Get all Three scenes
// @access  Public
router.get('/', (req, res, next) => {
  Three.find()
    .sort({ date: -1 })
    .exec()
    .then(scenes => res.status(200).json(scenes))
    .catch(err => res.status(404).json({ noscenesfound: 'No three scenes found' }));
});

// @route   POST api/recipes
// @desc    Create a recipe
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  // Check Validation
  const { errors, isValid } = validateThreeInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newThree = new Three({
    _id: new mongoose.Types.ObjectId(),
    scene: req.body.scene
  });

  newThree.save().then(scenes => res.status(201).json(scenes)); // added 201 status
});

// @route   GET api/three/:id
// @desc    Get three scene by id
// @access  Public
router.get('/:id', (req, res, next) => {
  Three.findById(req.params.id)
    .exec()
    .then(scene => res.json(scene))
    .catch(err => res.status(404).json({ noscenesfound: 'No three scene found with that ID' }));
});

module.exports = router;
