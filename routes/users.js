const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', usersController.testUsers);

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', usersController.registerUser);

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', usersController.loginUser);

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), usersController.getCurrentUser);

module.exports = router;
