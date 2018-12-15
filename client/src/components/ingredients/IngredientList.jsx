import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  List,
} from '@material-ui/core';

import IngredientItem from './IngredientItem';
import Loader from '../common/Loader';

const styles = theme => ({
  ingredientList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
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
        return ingredient.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
      })
      .map(ingredient => <IngredientItem key={ingredient._id} ingredient={ingredient} />);
  } else {
    ingredientItems = <Typography variant="h4">No Ingredients found...</Typography>;
  }

  return (
    <div className="ingredient-list">
      <Grid container justify="center">
        <TextField
          className={classes.searchTextfield}
          placeholder="Select an Ingredient"
          margin="normal"
          variant="outlined"
        // inputRef={value => {
        //   this.myValue = value;
        // }}
        // onChange={this.filterUpdate}
        />
        <List className={classes.ingredientList}>
          {ingredientItems}
        </List>
      </Grid>
    </div>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  filterUpdate: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(IngredientList);
