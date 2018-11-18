import axios from 'axios';

import {
  GET_RESTAURANTS,
  GET_RESTAURANT,
  RESTAURANT_LOADING,
  GET_ERRORS,
} from '../constants/types';

// Set loading state
export const setRestaurantLoading = () => {
  return {
    type: RESTAURANT_LOADING,
  };
};

// Get All Restaurants
export const getRestaurants = () => dispatch => {
  dispatch(setRestaurantLoading());
  axios
    .get('/api/restaurants')
    .then(res => dispatch({
      type: GET_RESTAURANTS,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_RESTAURANTS,
      payload: null,
    }));
};

// Get Restaurant
export const getRestaurant = id => dispatch => {
  dispatch(setRestaurantLoading());
  axios
    .get(`/api/restaurants/${id}`)
    .then(res => dispatch({
      type: GET_RESTAURANT,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_RESTAURANT,
      payload: null,
    }));
};

// Create Restaurant Profile
export const createRestaurant = (restaurantData, history) => dispatch => {
  axios
    .post('/api/restaurants', restaurantData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
