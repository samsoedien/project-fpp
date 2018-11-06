import axios from 'axios';
import { formatListing } from '../helpers/fileHelpers';

import { GET_RECIPES, GET_RECIPE, RECIPE_LOADING, GET_ERRORS } from './types';

const config = {
  headers: {
    'content-type': 'multipart/form-data'
  }
};

// Set loading state
export const setRecipeLoading = () => {
  return {
    type: RECIPE_LOADING
  };
};

// Get All Recipes
export const getRecipes = () => dispatch => {
  dispatch(setRecipeLoading());
  axios
    .get('/api/recipes')
    .then(res =>
      dispatch({
        type: GET_RECIPES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_RECIPES,
        payload: null
      })
    );
};

// Get Recipe
export const getRecipe = id => dispatch => {
  dispatch(setRecipeLoading());
  axios
    .get(`/api/recipes/${id}`)
    .then(res =>
      dispatch({
        type: GET_RECIPE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_RECIPE,
        payload: null
      })
    );
};

// Create Recipe
export const createRecipe = (recipeData, history) => async dispatch => {
  await axios
    .post('/api/recipes', recipeData, config)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// FIXME: fix helper function
