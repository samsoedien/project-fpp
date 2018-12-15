import axios from 'axios';

import {
  GET_RECIPES,
  GET_RECIPE,
  DELETE_RECIPE,
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
      payload: res.data,
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
      payload: res.data,
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
    .then(res => history.push('/recipes'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const deleteRecipe = id => dispatch => {
  axios
    .delete(`/api/recipes/${id}`)
    .then(res => dispatch({
      type: DELETE_RECIPE,
      payload: id,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const favoriteRecipe = (id, favoriteData) => dispatch => {
  axios
    .post(`/api/recipes/${id}/favorites`, favoriteData)
    .then(res => dispatch({
      type: GET_RECIPE,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const addRecipeComment = (id, postData) => dispatch => {
  axios
    .post(`/api/recipes/${id}/posts`, postData)
    .then(res => dispatch({
      type: GET_RECIPE,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const deleteRecipeComment = (recipeId, postId) => dispatch => {
  axios
    .delete(`/api/recipes/${recipeId}/posts/${postId}`)
    .then(res => dispatch({
      type: GET_RECIPE,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const likeRecipeComment = (recipeId, postId, likeData) => dispatch => {
  axios
    .post(`/api/recipes/${recipeId}/posts/${postId}/likes`, likeData)
    .then(res => dispatch({
      type: GET_RECIPE,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const flagRecipeComment = (recipeId, postId, flagData) => dispatch => {
  axios
    .post(`/api/recipes/${recipeId}/posts/${postId}/flags`, flagData)
    .then(res => dispatch({
      type: GET_RECIPE,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
