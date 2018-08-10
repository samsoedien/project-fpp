import axios from 'axios';

import {
  GET_RECIPES,
  RECIPE_LOADING,
} from './types';

// Set loading state
export const setRecipeLoading = () => {
  return {
    type: RECIPE_LOADING,
  };
};

// Get Recipes
export const getRecipes = () => (dispatch) => {
  dispatch(setRecipeLoading());
  axios
    .get('/api/recipes')
    .then(res => dispatch({
      type: GET_RECIPES,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_RECIPES,
      payload: null,
    }));
};
