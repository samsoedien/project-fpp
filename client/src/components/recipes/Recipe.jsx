import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

import ThreeContainer from '../../containers/ThreeContainer';

import RecipeHeader from './RecipeHeader';
import RecipeFavourite from './RecipeFavourite';
import RecipeInfo from './RecipeInfo';

const Recipe = ({
  recipe,
  isFavourited,
  loading,
}) => {
  let recipeContent;
  if (recipe === null || loading) {
    recipeContent = <Spinner />;
  } else {
    recipeContent = (
      <div>
        <RecipeHeader recipeImage={recipe.image} />
        <RecipeFavourite isFavourited={isFavourited} />
        <RecipeInfo recipe={recipe} />
        <ThreeContainer />
      </div>
    );
  }
  return (
    <div className="recipe">
      {recipeContent}
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  isFavourited: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Recipe;
