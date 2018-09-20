const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.kcal = !isEmpty(data.kcal) ? data.kcal : '';

  if (Validator.isEmpty(data.kcal)) {
    errors.kcal = 'Calories field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
