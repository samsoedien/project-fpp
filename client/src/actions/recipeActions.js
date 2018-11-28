import axios from 'axios';

import {
  GET_RECIPES,
  GET_RECIPE,
  RECIPE_LOADING,
  GET_ERRORS,
} from '../constants/types';

// Set loading state
export const setRecipeLoading = () => ({ type: RECIPE_LOADING });

// Get All Recipes
export const getRecipes = () => dispatch => {
  dispatch(setRecipeLoading());
  axios
    .get('/api/recipes')
    .then(res => dispatch({
      type: GET_RECIPES,
      payload: res.data.recipes,
    }))
    .catch(err => dispatch({
      type: GET_RECIPES,
      payload: null,
    }));
};

// Get Recipe
export const getRecipe = id => dispatch => {
  dispatch(setRecipeLoading());
  axios
    .get(`/api/recipes/${id}`)
    .then(res => dispatch({
      type: GET_RECIPE,
      payload: res.data.recipe,
    }))
    .catch(err => dispatch({
      type: GET_RECIPE,
      payload: null,
    }));
};

// Create Recipe
export const createRecipe = (recipeData, history) => dispatch => {
  axios
    .post('/api/recipes', recipeData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

// FIXME: fix helper function
// TODO: Look into async await dispatch
