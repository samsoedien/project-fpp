const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBlogInput(data) {
  const errors = {};

  data = {
    headline: !isEmpty(data.headline) ? data.headline : '',
    article: !isEmpty(data.article) ? data.article : '',
  };

  if (!Validator.isLength(data.headline, { min: 3, max: 64 })) {
    errors.headline = 'Headline must be between 3 and 64 characters';
  }

  if (Validator.isEmpty(data.headline)) {
    errors.headline = 'Title Field is required';
  }

  if (!Validator.isLength(data.article, { min: 100, max: 10000 })) {
    errors.article = 'A written article must be atleast 100 characters';
  }

  if (Validator.isEmpty(data.article)) {
    errors.article = 'Article field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
