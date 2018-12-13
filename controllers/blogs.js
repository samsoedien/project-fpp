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
    .populate('profile', ['name', 'avatar', 'profession'])
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
  Blog.findOne({ headline: req.body.headline }).then(blog => {
    if (blog) {
      errors.headline = 'Headline already exists';
      return res.status(400).json(errors);
    }
  });
  if (req.file) {
    const imagePath = req.file.path.replace(/\\/g, '/');
    console.log(imagePath);

    const newBlog = new Blog({
      _id: new mongoose.Types.ObjectId(),
      user: req.user.id,
      profile: req.profile,
      headline: req.body.headline,
      article: req.body.article,
      image: imagePath,
    });
    newBlog
      .save()
      .then(blog => res.status(201).json(blog))
      .catch(err => console.log(err));
  } else {
    const newBlog = new Blog({
      _id: new mongoose.Types.ObjectId(),
      user: req.user.id,
      profile: req.profile,
      headline: req.body.headline,
      article: req.body.article,
    });
    newBlog
      .save()
      .then(blog => res.status(201).json(blog))
      .catch(err => console.log(err));
  }
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

exports.postBlogPost = (req, res, next) => {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  Blog.findById(req.params.id).then(blog => {
    const newPost = {
      comment: req.body.comment,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id,
    };
    blog.posts.unshift(newPost);
    blog.save().then(result => res.json(result));
  });
};

exports.deleteBlogPost = (req, res, next) => {
  Blog.findById(req.params.id)
    .then(blog => {
      // Check to see if comment exists
      if (
        blog.posts.filter(post => post._id.toString() === req.params.blog_id)
          .length === 0
      ) {
        return res.status(404).json({ commentnotexists: 'Comment does not exist' });
      }
      // Get remove index
      const removeIndex = blog.post
        .map(item => item._id.toString())
        .indexOf(req.params.post_id);

      // Splice comment out of array
      blog.posts.splice(removeIndex, 1);

      blog.save().then(post => res.json(blog));
    })
    .catch(err => res.status(404).json({ blognotfound: 'No blog found' }));
};

exports.postLikeBlogPost = (req, res, next) => {
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

exports.postFlagBlogPost = (req, res, next) => {
  Profile.findOne({ user: req.user.id }).then(profile => {
    Blog.findById(req.params.id)
      .then(blog => {
        if (blog.posts.flags.filter(favorite => favorite.user.toString() === req.user.id).length > 0) {
          const removeIndex = blog.posts.flags.map(item => item.user.toString()).indexOf(req.user.id);
          blog.posts.flags.splice(removeIndex, 1);
          blog.save().then(blog => res.json(blog));
        } else {
          blog.posts.flags.unshift({ user: req.user.id });
          blog.save().then(blog => res.json(blog));
        }
      })
      .catch(err => res.status(404).json({ blognotfound: 'No blog found' }));
  });
};
