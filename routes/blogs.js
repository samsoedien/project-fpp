const express = require('express');
const passport = require('passport');

const blogsController = require('../controllers/blogs');

const router = express.Router();


router.get('/test', blogsController.testBlogs);

router.get('/', blogsController.getBlogs);

router.get('/:id', blogsController.getBlogById);

router.post('/', passport.authenticate('jwt', { session: false }), blogsController.postBlog);

router.patch('/:id', passport.authenticate('jwt', { session: false }), blogsController.updateBlog);

router.delete('/:id', passport.authenticate('jwt', { session: false }), blogsController.deleteBlog);

router.post('/:id/favorites', passport.authenticate('jwt', { session: false }), blogsController.postFavoriteBlog);

router.post('/:id/posts', passport.authenticate('jwt', { session: false }), blogsController.postBlogPost);

router.delete('/:blogId/posts/:postId', passport.authenticate('jwt', { session: false }), blogsController.deleteBlogPost);

router.post('/:blogId/posts/:postId/likes', passport.authenticate('jwt', { session: false }), blogsController.postLikeBlogPost);

router.post('/:blogId/posts/:postId/flags', passport.authenticate('jwt', { session: false }), blogsController.postFlagBlogPost);

module.exports = router;
