const express = require('express');
const passport = require('passport');

const blogsController = require('../controllers/blogs');

const router = express.Router();

// @route   GET api/blogs/test
// @desc    Tests post route
// @access  Public
router.get('/test', blogsController.testBlogs);

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get('/', blogsController.getBlogs);

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get('/:id', blogsController.getBlogById);

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), blogsController.postBlog);

module.exports = router;
