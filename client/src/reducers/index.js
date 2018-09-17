import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import recipeReducer from './recipeReducer';
import ingredientReducer from './ingredientReducer';
import restaurantReducer from './restaurantReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  recipe: recipeReducer,
  ingredient: ingredientReducer,
  restaurant: restaurantReducer,
});
