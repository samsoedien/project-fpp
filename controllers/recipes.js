const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const Recipe = require('../models/Recipe');
const Profile = require('../models/Profile');

const validateRecipeInput = require('../validation/recipe');
const validatePostInput = require('../validation/post');

exports.getRecipes = (req, res, next) => {
  Recipe.find()
    .select('-__v')
    .populate('user', ['name', 'avatar'])
    .sort({ date: -1 })
    .exec()
    .then(result => {
      const response = {
        count: result.length,
        recipes: result.map(doc => {
          return {
            _id: doc._id,
            title: doc.title,
            request: {
              type: 'GET',
              url: `http://localhost:4000/api/recipes/${doc._id}`,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch(err => res.status(404).json({ status: 'error', message: 'No recipes found' }));
};

exports.getRecipeById = (req, res, next) => {
  Recipe.findById(req.params.id)
    .select('-__v')
    .populate('user', ['name', 'avatar'])
    .exec()
    .then(result => {
      const response = {
        recipe: result,
      };
      res.status(200).json(response);
    })
    .catch(err => res.status(404).json({ status: 'error', message: 'No recipe found with that ID' }));
};

exports.postRecipe = (req, res, next) => {
  console.log(req.file);
  const { errors, isValid } = validateRecipeInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  if (req.file) {
    const newRecipe = new Recipe({
      _id: new mongoose.Types.ObjectId(),
      user: req.user.id,
      title: req.body.title,
      cuisine: req.body.cuisine,
      description: req.body.description,
      image: req.file.path,
    });
    newRecipe
      .save()
      .then(recipe => res.status(201).json(recipe))
      .catch(err => console.log(err));
  } else {
    const newRecipe = new Recipe({
      _id: new mongoose.Types.ObjectId(),
      user: req.user.id,
      title: req.body.title,
      cuisine: req.body.cuisine,
      description: req.body.description,
    });
    newRecipe
      .save()
      .then(recipe => res.status(201).json(recipe))
      .catch(err => console.log(err));
  }
};

exports.updateRecipe = (req, res, next) => {
};

exports.deleteRecipe = (req, res, next) => {
  Recipe.findOne({ user: req.user.id }).then(recipe => {
    Recipe.findById(req.params.id)
      .then(recipe => {
        if (recipe.user.toString() !== req.user.id) {
          return res.status(401).json({ status: 'error', message: 'User not authorized' });
        }
        recipe
          .remove()
          .then(() => {
            const response = {
              status: 'success',
              data: null,
            };
            res.status(204).json(response);
          })
      })
      .catch(err => res.status(404).json({ status: 'error', message: 'Recipe not found.' }));
  });

};

exports.postFavoriteRecipe = (req, res, next) => {
  Profile.findOne({ user: req.user.id }).then(profile => {
    Recipe.findById(req.params.id)
      .then(recipe => {
        if (recipe.favorites.filter(favorite => favorite.user.toString() === req.user.id).length > 0) {
          // return res.status(400).json({ alreadyfavorited: 'User already favorited this recipe' });
          const removeIndex = recipe.favorites.map(item => item.user.toString()).indexOf(req.user.id);
          recipe.favorites.splice(removeIndex, 1);
          recipe.save().then(recipe => res.json(recipe));
        } else {
          // Add user id to likes array
          recipe.favorites.unshift({ user: req.user.id });
          recipe.save().then(recipe => res.json(recipe));
        }
      })
      .catch(err => res.status(404).json({ recipenotfound: 'No recipe found' }));
  });
};

exports.postRecipePost = (req, res, next) => {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }

  Recipe.findById(req.params.id).then(recipe => {
    const newPost = {
      comment: req.body.comment,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id,
    };
    recipe.posts.unshift(newPost);
    recipe.save().then(result => res.json(result));
  });
};

exports.deleteRecipePost = (req, res, next) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      // Check to see if comment exists
      if (
        recipe.posts.filter(post => post._id.toString() === req.params.recipe_id)
          .length === 0
      ) {
        return res.status(404).json({ commentnotexists: 'Comment does not exist' });
      }
      // Get remove index
      const removeIndex = recipe.post
        .map(item => item._id.toString())
        .indexOf(req.params.post_id);

      // Splice comment out of array
      recipe.posts.splice(removeIndex, 1);

      recipe.save().then(post => res.json(recipe));
    })
    .catch(err => res.status(404).json({ recipenotfound: 'No recipe found' }));
};

exports.postLikeRecipePost = (req, res, next) => {
  console.log(req.params.recipeId);
  Profile.findOne({ user: req.user.id }).then(profile => {
    Recipe.findById(req.params.recipeId)
      .then(recipe => {
        if (recipe.posts.filter(post === req.params.postId).likes.filter(like => like.user.toString() === req.user.id).length > 0) {
          const removeIndex = recipe.posts.likes.map(item => item.user.toString()).indexOf(req.user.id);
          recipe.posts.filter(post === req.params.postId).likes.splice(removeIndex, 1);
          recipe.save().then(recipe => res.json(recipe));
        } else {
          // Add user id to likes array
          recipe.posts.likes.unshift({ user: req.user.id });
          recipe.save().then(recipe => res.json(recipe));
        }
      })
      .catch(err => res.status(404).json({ recipenotfound: 'No recipe found' }));
  });
};


// Profile.findOne({ user: req.user.id }).then(profile => {
//   Recipe.findById(req.params.id)
//     .then(recipe => {
//       if (recipe.posts.likes.filter(favorite => favorite.user.toString() === req.user.id).length > 0) {
//         const removeIndex = recipe.posts.likes.map(item => item.user.toString()).indexOf(req.user.id);
//         recipe.posts.likes.splice(removeIndex, 1);
//         recipe.save().then(recipe => res.json(recipe));
//       } else {
//         recipe.posts.likes.unshift({ user: req.user.id });
//         recipe.save().then(recipe => res.json(recipe));
//       }
//     })
//     .catch(err => res.status(404).json({ recipenotfound: 'No recipe found' }));
// });

exports.postFlagRecipePost = (req, res, next) => {
  Profile.findOne({ user: req.user.id }).then(profile => {
    Recipe.findById(req.params.id)
      .then(recipe => {
        if (recipe.posts.flags.filter(favorite => favorite.user.toString() === req.user.id).length > 0) {
          const removeIndex = recipe.posts.flags.map(item => item.user.toString()).indexOf(req.user.id);
          recipe.posts.flags.splice(removeIndex, 1);
          recipe.save().then(recipe => res.json(recipe));
        } else {
          recipe.posts.flags.unshift({ user: req.user.id });
          recipe.save().then(recipe => res.json(recipe));
        }
      })
      .catch(err => res.status(404).json({ recipenotfound: 'No recipe found' }));
  });
};









// exports.postIngredient = (req, res, next) => {
//   Recipe.findOne({ user: req.user.id }).then(recipe => {
//     const newIngredient = {
//       ingredient: req.body.ingredient
//     };
//     // Add to recipe array
//     recipe.ingredients.unshift(newIngredient);
//     recipe.save().then(recipe => res.json(recipe));
//   });
// };

// // @route   POST api/recipes/ingredient
// // @desc    Add an ingredient to the recipe
// // @access  Private
// router.post(
//   '/ingredient',
//   passport.authenticate('jwt', { session: false }),
//   recipesController.postIngredient
// );

// @route   POST api/recipes/:id
// @desc    Upload an image
// @access  Public
// router.post('/image', upload.single('image'), (req, res, next) => {
//   const newRecipe = new Recipe({
//     _id: new mongoose.Types.ObjectId(),
//     title: req.body.title,
//     description: req.body.description,
//     ingredient: req.body.ingredient,
//     image: req.file.path
//   });
//   newRecipe
//     .save()
//     .then(result => {
//       console.log(result);
//       res.status(201).json({
//         message: 'Created recipe successfully',
//         recipe: {
//           title: result.title,
//           ingredient: result.ingredient,
//           _id: result._id,
//           request: {
//             type: 'GET',
//             url: 'http://localhost:4000/api/recipes/' + result._id
//           }
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });


// FIXME: fix file uploads 

// exports.getRecipes = (req, res, next) => {
//   Recipe.find()
//     .populate('user', ['name', 'avatar'])
//     .sort({ date: -1 })
//     .exec()
//     .then(recipes => res.status(200).json(recipes))
//     .catch(err => res.status(404).json({ norecipesfound: 'No recipes found' }));
// };

// exports.getRecipeById = (req, res, next) => {
//   Recipe.findById(req.params.id)
//     .populate('user', ['name', 'avatar'])
//     .exec()
//     .then(recipe => res.status(200).json(recipe))
//     .catch(err => res.status(404).json({ norecipefound: 'No recipe found with that ID' }));
// };

// exports.postRecipe = (req, res, next) => {
//   console.log(req.file);
//   const { errors, isValid } = validateRecipeInput(req.body);
//   if (!isValid) {
//     return res.status(422).json(errors);
//   }
//   const newRecipe = new Recipe({
//     _id: new mongoose.Types.ObjectId(),
//     title: req.body.title,
//     cuisine: req.body.cuisine,
//     description: req.body.description,
//     imageUrl: req.file.path,
//     user: req.user.id
//   });
//   newRecipe
//     .save()
//     .then(recipe => res.status(201).json(recipe))
//     .catch(err => console.log(err));
// };

// exports.updateRecipe = (req, res, next) => {
// };

// exports.deleteRecipe = (req, res, next) => {

// };

// exports.postIngredient = (req, res, next) => {
//   Recipe.findOne({ user: req.user.id }).then(recipe => {
//     const newIngredient = {
//       ingredient: req.body.ingredient
//     };
//     // Add to recipe array
//     recipe.ingredients.unshift(newIngredient);
//     recipe.save().then(recipe => res.json(recipe));
//   });
// };

// // @route   POST api/recipes/ingredient
// // @desc    Add an ingredient to the recipe
// // @access  Private
// router.post(
//   '/ingredient',
//   passport.authenticate('jwt', { session: false }),
//   recipesController.postIngredient
// );

// @route   POST api/recipes/:id
// @desc    Upload an image
// @access  Public
// router.post('/image', upload.single('image'), (req, res, next) => {
//   const newRecipe = new Recipe({
//     _id: new mongoose.Types.ObjectId(),
//     title: req.body.title,
//     description: req.body.description,
//     ingredient: req.body.ingredient,
//     image: req.file.path
//   });
//   newRecipe
//     .save()
//     .then(result => {
//       console.log(result);
//       res.status(201).json({
//         message: 'Created recipe successfully',
//         recipe: {
//           title: result.title,
//           ingredient: result.ingredient,
//           _id: result._id,
//           request: {
//             type: 'GET',
//             url: 'http://localhost:4000/api/recipes/' + result._id
//           }
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });


// FIXME: fix file uploads 
// FIXME: comment likes (has two id's see routes)