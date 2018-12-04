const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBlogInput(data) {
  let errors = {};

  data.heading = !isEmpty(data.heading) ? data.heading : '';

  if (!Validator.isLength(data.heading, { min: 3, max: 32 })) {
    errors.heading = 'Heading must be between 3 and 32 characters';
  }

  if (Validator.isEmpty(data.heading)) {
    errors.heading = 'Title Field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
