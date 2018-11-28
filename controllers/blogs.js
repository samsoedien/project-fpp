const mongoose = require('mongoose');

const Blog = require('../models/Blog');

const validateBlogInput = require('../validation/blog');

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
    title: req.body.title,
    user: req.user.id,
  });
  newBlog
    .save()
    .then(blog => res.status(201).json(blog))
    .catch(err => console.log(err));
};
