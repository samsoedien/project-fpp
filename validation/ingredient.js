const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateIngredientInput(data) {
  const errors = {};

  data = {
    name: !isEmpty(data.name) ? data.name : '',
    nutritions: !isEmpty(data.nutritions) ? data.nutritions : '',
  };

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
