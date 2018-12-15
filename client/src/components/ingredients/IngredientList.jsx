import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import IngredientItem from './IngredientItem';
import Loader from '../common/Loader';
import SearchBarComponent from '../common/SearchBarComponent';

const styles = theme => ({

});

const IngredientList = ({
  ingredients,
  filterText,
  filterUpdate,
  loading,
  classes,
}) => {
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
          <SearchBarComponent
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
  filterUpdate: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(IngredientList);
