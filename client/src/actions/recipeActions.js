import axios from 'axios';

import {
  GET_RECIPES,
  RECIPE_LOADING,
  GET_ERRORS,
} from './types';

// Set loading state
export const setRecipeLoading = () => {
  return {
    type: RECIPE_LOADING,
  };
};

// Get All Recipes
export const getRecipes = () => (dispatch) => {
  dispatch(setRecipeLoading());
  axios
    .get('/api/recipes/all')
    .then(res => dispatch({
      type: GET_RECIPES,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_RECIPES,
      payload: null,
    }));
};

// Create Recipe
export const createRecipe = (recipeData, history) => (dispatch) => {
  axios
    .post('/api/recipes', recipeData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
