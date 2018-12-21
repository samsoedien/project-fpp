import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Chip,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const RecipeChips = ({ recipe, classes }) => {
  let recipeChips;
  if (recipe) recipeChips = <Chip label="Vegetarian" className={classes.chip} variant="outlined" color="primary" />;

  return (
    <div className="recipe-chips">
      <Grid container justify="center">
        <Chip label={recipe.category} className={classes.chip} variant="outlined" color="primary" />
        <Chip label={recipe.printTime} className={classes.chip} variant="outlined" color="primary" />
        <Chip label={recipe.dimensions} className={classes.chip} variant="outlined" color="primary" />
        <Chip label="Vegetarian" className={classes.chip} variant="outlined" color="primary" />
        <Chip label="Vegetarian" className={classes.chip} variant="outlined" color="primary" />
      </Grid>
    </div>
  );
};

RecipeChips.propTypes = {
  recipe: PropTypes.shape({}).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeChips);
