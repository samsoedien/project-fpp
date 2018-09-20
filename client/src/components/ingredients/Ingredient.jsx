import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

import NutritionContainer from '../../containers/NutritionContainer';

const Ingredient = ({
  ingredient,
  loading,
}) => {
  let ingredientContent;
  if (ingredient === null || loading) {
    ingredientContent = <Spinner />;
  } else {
    ingredientContent = (
      <div>
        <span>{ingredient.name}</span>
        <NutritionContainer nutritions={ingredient.nutritions} />
      </div>
    );
  }

  return (
    <div className="ingredient">
      {ingredientContent}
    </div>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Ingredient;
