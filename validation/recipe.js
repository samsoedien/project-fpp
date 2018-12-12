const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRecipeInput(data) {
  const errors = {};

  data = {
    title: !isEmpty(data.title) ? data.title : '',
    cuisine: !isEmpty(data.cuisine) ? data.cuisine : '',
    description: !isEmpty(data.description) ? data.description : '',
    directions: !isEmpty(data.directions) ? data.directions : '',
  };

  if (!Validator.isLength(data.title, { min: 3, max: 20 })) {
    errors.title = 'Recipe title must be between 3 and 20 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
