import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import Loader from '../common/Loader';

const Ingredient = ({ ingredient, loading }) => {
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
  ingredient: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Ingredient;
