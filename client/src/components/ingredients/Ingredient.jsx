import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import Loader from '../common/Loader';

const styles = theme => ({

});

const Ingredient = ({ ingredient, loading, classes }) => {
  let ingredientContent;
  if (ingredient === null || loading) {
    ingredientContent = <Loader />;
  } else {
    ingredientContent = (
      <div>
        <Typography variant="paragraph">
          Please specify the nutrition values of the ingredient per 100 grams
        </Typography>
        <Typography>{ingredient.name}</Typography>
      </div>
    );
  }

  return (
    <div className="ingredient">
      <Grid container>{ingredientContent}</Grid>
    </div>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Ingredient);
