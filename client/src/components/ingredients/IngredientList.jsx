import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import SearchBar from '../common/SearchBar';

import IngredientItem from './IngredientItem';

const IngredientList = ({ ingredients, filterText, filterUpdate, loading }) => {
  const filterCallback = val => {
    filterUpdate(val);
  };

  console.log(ingredients);
  let ingredientItems;
  if (ingredients === null || loading) {
    ingredientItems = <Spinner />;
  } else if (ingredients.length > 0) {
    ingredientItems = ingredients
      .filter(ingredient => {
        // remove names that do not match current filter text
        return ingredient.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
      })
      .map(ingredient => <IngredientItem key={ingredient._id} ingredient={ingredient} />);
  } else {
    ingredientItems = <h4>No Ingredients found...</h4>;
  }

  return (
    <div className="ingredient-list">
      <div className="container">
        <div className="input-group input-group-lg">
          <SearchBar
            filterText={filterText}
            filterUpdate={filterUpdate}
            filterCallback={filterCallback}
          />
        </div>
        <ul className="bg-light">{ingredientItems}</ul>
      </div>
    </div>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  filterUpdate: PropTypes.string.isRequired
};

export default IngredientList;

//TODO: Use Code Splitting ( dynamic import() )
