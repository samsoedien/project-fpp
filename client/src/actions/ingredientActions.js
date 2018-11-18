import axios from 'axios';

import {
  GET_INGREDIENTS,
  GET_INGREDIENT,
  INGREDIENT_LOADING,
  GET_ERRORS
} from '../constants/types';

// Set loading state
export const setIngredientLoading = () => {
  return {
    type: INGREDIENT_LOADING
  };
};

// Get All Ingredients
export const getIngredients = () => dispatch => {
  dispatch(setIngredientLoading());
  axios
    .get('/api/ingredients')
    .then(res => dispatch({
      type: GET_INGREDIENTS,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_INGREDIENTS,
      payload: null,
    }));
};

// Get Ingredient
export const getIngredient = id => dispatch => {
  dispatch(setIngredientLoading());
  axios
    .get(`/api/ingredients/${id}`)
    .then(res =>
      dispatch({
        type: GET_INGREDIENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_INGREDIENT,
        payload: null
      })
    );
};

// Create Ingredient
export const createIngredient = (ingredientData, history) => dispatch => {
  axios
    .post('/api/ingredients', ingredientData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add nutritions
export const addNutrition = (nutritionData, history) => dispatch => {
  axios
    .post('/api/ingredients/nutritions', nutritionData)
    .then(res => history.push('/ingredients'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
