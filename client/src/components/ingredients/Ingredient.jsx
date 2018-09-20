import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

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
        <div className="container pt-5">
          <p className="lead">Please specify the nutrition values of the ingredient per 100 grams</p>
          <span>{ingredient.name}</span>
        </div>
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
