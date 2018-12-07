const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBlogInput(data) {
  let errors = {};

  data.headline = !isEmpty(data.headline) ? data.headline : '';

  if (!Validator.isLength(data.headline, { min: 3, max: 32 })) {
    errors.headline = 'Headline must be between 3 and 32 characters';
  }

  if (Validator.isEmpty(data.headline)) {
    errors.headline = 'Title Field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
