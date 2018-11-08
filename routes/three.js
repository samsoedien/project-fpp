const express = require('express');
const passport = require('passport');

const threeController = require('../controllers/three');

const router = express.Router();

// @route   GET api/three/test
// @desc    Tests recipes route
// @access  Public
router.get('/test', threeController.testThree);

// @route   GET api/three
// @desc    Get all Three scenes
// @access  Public
router.get('/', threeController.getThree);

// @route   GET api/three/:id
// @desc    Get three scene by id
// @access  Public
router.get('/:id', threeController.getThreeById);

// @route   POST api/recipes
// @desc    Create a recipe
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), threeController.postThree);

module.exports = router;
