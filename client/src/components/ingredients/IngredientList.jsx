import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import IngredientItem from './IngredientItem';
import Loader from '../common/Loader';
import SearchBar from '../common/SearchBar';

const IngredientList = ({ ingredients, filterText, filterUpdate, loading }) => {
  const filterCallback = val => {
    filterUpdate(val);
  };

  console.log(ingredients);
  let ingredientItems;
  if (ingredients === null || loading) {
    ingredientItems = <Loader />;
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
      <Grid container justify="center">
        <div className="input-group input-group-lg">
          <SearchBar
            filterText={filterText}
            filterUpdate={filterUpdate}
            filterCallback={filterCallback}
          />
        </div>
        <ul>{ingredientItems}</ul>
      </Grid>
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
