const express = require('express');
const passport = require('passport');

const profilesController = require('../controllers/profiles');

const router = express.Router();

// @route   GET api/profiles/test
// @desc    Tests profile route
// @access  Public
router.get('/test', profilesController.testProfiles);

// @route   GET api/profiles/all
// @desc    Get all profiles
// @access  Public
router.get('/all', profilesController.getProfiles);

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), profilesController.getCurrentProfile);

// @route   GET api/profiles/handle/:handle
// @desc    Get profile by handle
// @access  Public
router.get('/handle/:handle', profilesController.getProfileByHandle);

// @route   GET api/profiles/user/:user_id
// @desc    Get profile by user ID
// @access  Public
router.get('/user/:user_id', profilesController.getProfileById);

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), profilesController.createOrUpdateProfile);

// @route   POST api/profiles/experience
// @desc    Add experience to profile
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), profilesController.postExperience);

// @route   DELETE api/profiles/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', { session: false }), profilesController.deleteExperience);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), profilesController.deleteProfile);

module.exports = router;
