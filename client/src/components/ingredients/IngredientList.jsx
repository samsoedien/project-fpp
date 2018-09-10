import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

import IngredientItem from './IngredientItem';
import IngredientForm from './IngredientForm';

const IngredientList = ({
  ingredients,
  filterText,
  loading,
}) => {
  console.log(ingredients);
  let ingredientItems;
  if (ingredients === null || loading) {
    ingredientItems = <Spinner />;
  } else {
    if (ingredients.length > 0) {
      ingredientItems = ingredients
        // .filter(ingredient => {
        //   // remove names that do not match current filter text
        //   return ingredient.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        // })
        .map(ingredient => (
          <IngredientItem key={ingredient._id} ingredient={ingredient} />
        ));
    } else {
      ingredientItems = <h4>No Ingredients found...</h4>;
    }
  }
  return (
    <div className="ingredient-list">
      {ingredientItems}
      <IngredientForm />
    </div>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
};

export default IngredientList;
