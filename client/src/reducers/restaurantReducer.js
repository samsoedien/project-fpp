import {
  GET_RESTAURANTS,
  GET_RESTAURANT,
  RESTAURANT_LOADING
} from '../constants/types';

const initialState = {
  restaurants: null,
  restaurant: null,
  laoding: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESTAURANT_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
        loading: false
      };
    case GET_RESTAURANT:
      return {
        ...state,
        restaurant: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
