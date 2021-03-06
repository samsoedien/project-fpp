const express = require('express');
const passport = require('passport');

const recipesController = require('../controllers/recipes');

const router = express.Router();


router.get('/test', (req, res) => res.json({ message: 'Recipes Works' }));

router.get('/', recipesController.getRecipes);

router.get('/:id', recipesController.getRecipeById);

router.post('/', passport.authenticate('jwt', { session: false }), recipesController.postRecipe);

router.patch('/:id', passport.authenticate('jwt', { session: false }), recipesController.updateRecipe);

router.delete('/:id', passport.authenticate('jwt', { session: false }), recipesController.deleteRecipe);

router.post('/:id/favorites', passport.authenticate('jwt', { session: false }), recipesController.postFavoriteRecipe);

router.post('/:id/posts', passport.authenticate('jwt', { session: false }), recipesController.postRecipePost);

router.delete('/:recipeId/posts/:postId', passport.authenticate('jwt', { session: false }), recipesController.deleteRecipePost);

router.post('/:recipeId/posts/:postId/likes', passport.authenticate('jwt', { session: false }), recipesController.postLikeRecipePost);

router.post('/:recipeId/posts/:postId/flags', passport.authenticate('jwt', { session: false }), recipesController.postFlagRecipePost);

module.exports = router;
