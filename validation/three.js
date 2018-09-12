const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateThreeInput(data) {
  let errors = {};

  data.scene = !isEmpty(data.scene) ? data.scene : '';

  if (Validator.isEmpty(data.scene)) {
    errors.scene = 'Scene is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
