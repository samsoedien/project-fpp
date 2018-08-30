import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

import ThreeContainer from '../three/ThreeContainer';
import RecipeComponent from './RecipeComponent';
import ThreeScene from '../three/ThreeScene';
import RecipeNutritions from './RecipeNutritions';

const Recipe = ({ recipe, loading }) => {
  let recipeContent;

  if (recipe === null || loading) {
    recipeContent = <Spinner />;
  } else {
    recipeContent = (
      <div>
        <RecipeComponent recipe={recipe} />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ThreeScene width="400" height="320" />
            </div>
            <div className="col-md-4">
              <RecipeNutritions kcal="180" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe">
      {recipeContent}
    </div>
  )
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Recipe;
