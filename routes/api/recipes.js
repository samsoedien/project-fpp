const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const multer = require('multer');
const path = require('path');

const recipeController = require('../../controllers/recipes');

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
// @desc    Tests recipes route
// @access  Public
router.get('/test', (req, res) => res.json({ message: 'Recipes Works' }));

// @route   GET api/recipes
// @desc    Get recipes
// @access  Public
router.get('/', (req, res, next) => {
  Recipe.find()
    .select('_id title ingredient recipeImage')
    .sort({ date: -1 })
    .exec()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(404).json({ norecipesfound: 'No recipes found' }));
});


// @route   POST api/recipes
// @desc    Create a recipe
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  // Check Validation
  const { errors, isValid } = validateRecipeInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  console.log(req.file);

  const newRecipe = new Recipe({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    culinary: req.body.culinary,
    description: req.body.description,
    directions: req.body.directions,
    recipeImage: req.body.recipeImage,
    printSettings: req.body.printSettings,
    ingredient: req.body.ingredient,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  });

  newRecipe.save().then(recipe => res.status(201).json(recipe)); // added 201 status
});


// @route   GET api/recipes/:id
// @desc    Get recipe by id
// @access  Public
router.get('/:id', (req, res, next) => {
  Recipe.findById(req.params.id)
    .exec()
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
    description: req.body.description,
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

//TODO: Setup better structered routes and send detailed responses back

//FIXME: rewritten get request doesn't work  