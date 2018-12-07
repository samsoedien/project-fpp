import {
  GET_RECIPES,
  GET_RECIPE,
  ADD_RECIPE_COMMENT,
  RECIPE_LOADING,
} from '../constants/types';

const initialState = {
  recipes: null,
  recipe: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECIPE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
        loading: false,
      };
    case ADD_RECIPE_COMMENT:
      return {
        ...state,
        recipe: [action.payload, ...state.recipe],
      };
    default:
      return state;
  }
}
