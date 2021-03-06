const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  const errors = {};

  data = {
    // handle: !isEmpty(data.handle) ? data.handle : '',
    // profession: !isEmpty(data.profession) ? data.profession : '',
    company: !isEmpty(data.company) ? data.company : '',
    skills: !isEmpty(data.skills) ? data.skills : '',
  };

  // if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
  //   errors.handle = 'Handle needs to between 2 and 4 characters';
  // }

  // if (Validator.isEmpty(data.handle)) {
  //   errors.handle = 'Profile handle is required';
  // }

  // if (Validator.isEmpty(data.profession)) {
  //   errors.profession = 'Profession field is required';
  // }

  // if (Validator.isEmpty(data.company)) {
  //   errors.company = 'Business name field is required';
  // }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Status field is required';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
