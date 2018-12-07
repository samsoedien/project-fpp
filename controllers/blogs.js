const mongoose = require('mongoose');

const Blog = require('../models/Blog');
const Profile = require('../models/Profile');

const validateBlogInput = require('../validation/blog');
const validatePostInput = require('../validation/post');

exports.testBlogs = (req, res, next) => res.json({ message: 'Blogs Works' });

exports.getBlogs = (req, res, next) => {
  Blog.find()
    .select('-__v')
    .sort({ date: -1 })
    .exec()
    .then(blogs => res.status(200).json(blogs))
    .catch(err => res.status(404).json({ status: 'error', message: 'No blogs found' }));
};

exports.getBlogById = (req, res, next) => {
  Blog.findById(req.params.id)
    .select('-__v')
    .populate('user', ['name', 'avatar'])
    .exec()
    .then(blogs => res.status(200).json(blogs))
    .catch(err => res.status(404).json({ status: 'error', message: 'No blogs found with that ID' }));
};

exports.postBlog = (req, res, next) => {
  console.log(req.file);
  const { errors, isValid } = validateBlogInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  const newBlog = new Blog({
    _id: new mongoose.Types.ObjectId(),
    user: req.user.id,
    headline: req.body.headline,
    article: req.body.article,
    // image: req.body.image,
    // article: {
    //   subHeading: req.body.subHeading,
    //   content: req.body.content,
    // }
  });
  console.log(newBlog);
  newBlog
    .save()
    .then(blog => res.status(201).json(blog))
    .catch(err => console.log(err));
};

exports.updateBlog = (req, res, next) => {

};

exports.deleteBlog = (req, res, next) => {

};

exports.postFavoriteBlog = (req, res, next) => {
  Profile.findOne({ user: req.user.id }).then(profile => {
    Blog.findById(req.params.id)
      .then(blog => {
        if (blog.favorites.filter(favorite => favorite.user.toString() === req.user.id).length > 0) {
          // return res.status(400).json({ alreadyfavorited: 'User already favorited this blog' });
          const removeIndex = blog.favorites.map(item => item.user.toString()).indexOf(req.user.id);
          blog.favorites.splice(removeIndex, 1);
          blog.save().then(blog => res.json(blog));
        } else {
          // Add user id to likes array
          blog.favorites.unshift({ user: req.user.id });
          blog.save().then(blog => res.json(blog));
        }
      })
      .catch(err => res.status(404).json({ blognotfound: 'No blog found' }));
  });
};

exports.postCommentBlog = (req, res, next) => {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  Blog.findById(req.params.id).then(blog => {
    const newPost = {
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id,
    };
    blog.comments.unshift(newPost);
    blog.save().then(result => res.json(result));
  });
};

exports.postLikeCommentBlog = (req, res, next) => {
  Profile.findOne({ user: req.user.id }).then(profile => {
    Blog.findById(req.params.id)
      .then(post => {
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
          return res.status(400).json({ alreadyliked: 'User already liked this post' });
        }
        // Add user id to likes array
        post.likes.unshift({ user: req.user.id });

        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
  });
};
