const express = require('express');
const passport = require('passport');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/test', authController.testAuth);

// PUT /api/auth/
router.put('/', passport.authenticate('jwt', { session: false }), authController.registerUser);

// POST /api/auth/
router.post('/', passport.authenticate('jwt', { session: false }), authController.loginUser);

module.exports = router;
