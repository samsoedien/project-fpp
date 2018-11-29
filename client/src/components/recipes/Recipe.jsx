import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../common/Loader';

import ThreeContainer from '../../containers/ThreeContainer';

import RecipeHeader from './RecipeHeader';
import RecipeFavourite from './RecipeFavourite';
import RecipeInfo from './RecipeInfo';
import RecipeProfileCard from './RecipeProfileCard';
import RecipeComments from './RecipeComments';

import IngredientListContainer from '../../containers/IngredientListContainer';
import ThreeNutritions from '../three/ThreeNutritions';

const Recipe = ({ recipe, isFavourited, loading }) => {
  let recipeContent;
  if (recipe === null || loading) {
    recipeContent = <Loader />;
  } else {
    recipeContent = (
      <div>
        <RecipeHeader recipeImage={recipe.image} />
        <RecipeInfo recipe={recipe} />
        <RecipeProfileCard recipe={recipe} />
        <ThreeContainer recipe={recipe} width="600px" height="400px" />
        <ThreeNutritions kcal="220 " />
      </div>
    );
  }
  return <div className="recipe">{recipeContent}</div>;
};

Recipe.propTypes = {
  recipe: PropTypes.shape({}).isRequired,
  isFavourited: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Recipe;
