const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.restaurant = !isEmpty(data.restaurant) ? data.restaurant : '';
  data.from = !isEmpty(data.from) ? data.from : '';


  if (!Validator.isEmail(data.title)) {
    errors.title = 'Job title field is invalid';
  }

  if (!Validator.isEmail(data.restaurant)) {
    errors.restaurant = 'Restaurant field is invalid';
  }

  if (!Validator.isEmail(data.from)) {
    errors.from = 'From date field is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};