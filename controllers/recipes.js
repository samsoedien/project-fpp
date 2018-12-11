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
  const newRecipe = new Recipe({
    _id: new mongoose.Types.ObjectId(),
    user: req.user.id,
    title: req.body.title,
    cuisine: req.body.cuisine,
    description: req.body.description,
    // imageUrl: req.file.path,
  });
  newRecipe
    .save()
    .then(recipe => res.status(201).json(recipe))
    .catch(err => console.log(err));
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

exports.postCommentRecipe = (req, res, next) => {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }

  Recipe.findById(req.params.id).then(recipe => {
    const newPost = {
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id,
    };
    recipe.comments.unshift(newPost);
    recipe.save().then(result => res.json(result));
  });

}

exports.postLikeCommentRecipe = (req, res, next) => {
  Profile.findOne({ user: req.user.id }).then(profile => {
    Recipe.findById(req.params.id)
      .then(post => {
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
          return res.status(400).json({ alreadyliked: 'User already liked this post' });
        }
        // Add user id to likes array
        post.likes.unshift({ user: req.user.id });

        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
  });
}

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