const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRestaurantInput(data) {
  const errors = {};

  data = {
    name: !isEmpty(data.name) ? data.name : '',
  };

  if (!Validator.isLength(data.name, { min: 3, max: 20 })) {
    errors.name = 'Restaurant name must be between 3 and 20 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
