import {
  GET_INGREDIENTS,
  GET_INGREDIENT,
  INGREDIENT_LOADING
} from '../constants/types';

const initialState = {
  ingredients: null,
  ingredient: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INGREDIENT_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
        loading: false
      };
    case GET_INGREDIENT:
      return {
        ...state,
        ingredient: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
