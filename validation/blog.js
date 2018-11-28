const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBlogInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 3, max: 20 })) {
    errors.title = 'Blog title must be between 3 and 20 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
