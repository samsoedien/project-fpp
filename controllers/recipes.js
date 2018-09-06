const mongoose = require('mongoose');

const Recipe = require('../models/Recipe');

exports.recipes_get_all = (req, res, next) => {
  Recipe.find()
    .select('_id title ingredient recipeImage')
    .sort({ date: -1 })
    .exec()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(404).json({ norecipesfound: 'No recipes found' }));
};