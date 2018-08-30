const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.orginalname));
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});



// Recipe Model
const Recipe = require('../../models/Recipe');

// Validation
const validateRecipeInput = require('../../validation/recipe');

// @route   GET api/recipes/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ message: 'Recipes Works' }));

// @route   GET api/recipes
// @desc    Get recipes
// @access  Public
router.get('/', (req, res) => {
  Recipe.find()
    .sort({ date: -1 })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(404).json({ norecipesfound: 'No recipes found' }));
});

// @route   POST api/recipes
// @desc    Create a recipe
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateRecipeInput(req.body);
  // Check Validation
  if (!isValid) {
    // if any errors, send 400 with errors object
    return res.status(400).json(errors);
  }

  const newRecipe = new Recipe({
    title: req.body.title,
    ingredient: req.body.ingredient
  });

  newRecipe.save().then(recipe => res.json(recipe));
});


// @route   GET api/recipes/:id
// @desc    Get recipe by id
// @access  Public
router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err =>
      res.status(404).json({ norecipefound: 'No recipe found with that ID' })
    );
});

// @route   POST api/recipes/:id
// @desc    Upload an image
// @access  Public
router.post('/image', upload.single('recipeImage'), (req, res, next) => {
  const newRecipe = new Recipe({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    ingredient: req.body.ingredient,
    recipeImage: req.file.path
  });
  newRecipe
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created recipe successfully",
        recipe: {
          title: result.title,
          ingredient: result.ingredient,
          _id: result._id,
          request: {
            type: 'GET',
            url: "http://localhost:4000/api/recipes/" + result._id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;