const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Comment model
const Comment = require('../../models/Comments');
// Profile model
const Profile = require('../../models/Profile');


// Validation
const validateCommentInput = require('../../validation/comment');

// @route   GET api/posts/test
// @desc    Tests Posts route
// @access  Public 
router.get('/test', (req, res) => res.json({ message: "Posts Works" }));


// @route   GET api/posts
// @desc    Tests Posts route
// @access  Public 
router.get('/', (req, res) => {
  Comment.find()
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({ nocommentsfound: 'No comments found' }));
});

// @route   GET api/posts/:id
// @desc    Tests Posts route
// @access  Public 
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.status(404).json({ nocommentfound: 'No comment found with that ID' }));
});


// @route   POST api/posts
// @desc    Create Posts
// @access  Private 
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body);

  // Check Validation
  if (!isValid) {
    // If any errors send 400 with error objects
    return res.status(400).json(errors);
  }

  const newComment = new Comment({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  });

  newComment.save().then(comment => res.json(comment));
});

// @route   DELETE api/posts/:id
// @desc    Delete the post
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      Comment.findById(req.params.id)
        .then(comment => {
          // Check for comment owner
          if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ notauthorized: 'User not authorized' });
          }

          // Delete
          comment.remove().then(() => res.json({ succes: true }))
        })
        .catch(err => res.status(404).json({ commentnotfound: 'No comment found' }));
    });
});


// @route   Post api/posts/like/:id
// @desc    Like a post
// @access  Private
router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      Comment.findById(req.params.id)
        .then(comment => {
          if (comment.likes.filter(like => like.user.toString() === req.user.id.length > 0)) {
            return res.status(400).json({ alreadyliked: 'User already liked this comment' });
          }

          // Add user id to likes array
          comment.likes.unshift({ user: req.user.id }); // Can also use push instead of unshift

          comment.save().then(comment => res.json(comment))

        })
        .catch(err => res.status(404).json({ commentnotfound: 'No comment found' }));
    });
});


// @route   Post api/posts/unlike/:id
// @desc    Unlike a post
// @access  Private
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      Commment.findById(req.params.id)
        .then(comment => {
          if (comment.likes.filter(like => like.user.toString() === req.user.id.length === 0)) {
            return res.status(400).json({ notliked: 'User have not yet liked this post' });
          }

          //Get remove index
          const removeIndex = comment.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          comment.like.splice(removeIndex, 1);

          // Save
          comment.save().then(comment => res.json(comment));
        })
        .catch(err => res.status(404).json({ commentnotfound: 'No comment found' }));
    });
});

// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post('/comment/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body);

  // Check Validation
  if (!isValid) {
    // If any errors send 400 with error objects
    return res.status(400).json(errors);
  }

  Comment.findById(req.params.id)
    .then(comment => {
      const newReply = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.body.id
      }

      // Add to comment array
      comment.replies.unshift(newReply);

      // Save
      comment.save().then(comment => res.json(comment))
    })
    .catch(err => res.status(404).json({ commentnotfound: 'No comment found' }));
});


// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => {
      // Check if comment exists
      if (comment.comments.filter(comment => comment._id).toString() === req.params.comment_id.length === 0) {
        return res.status(404).json({ commentnotexists: 'Comment does not exists' });
      }

      // Get remove index
      const removeIndex = comment.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      // Splice comment out of array
      comment.comments.splice(removeIndex, 1);

      comment.save().then(comment => res.json(comment));
    })
    .catch(err => res.status(404).json({ commentnotfound: 'No comment found' }));
});

module.exports = router;