import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import testImg from '../../assets/img/foodprinted_sidedish.jpg';

const styles = theme => ({

});

const IngredientItem = ({ ingredient, classes }) => (
  <div className="ingredient-item">
    <Grid container justify="center">
      <Grid item md={2}>
        <img
          src={testImg}
          alt=""
          className="bg-secondary rounded-circle"
          style={{ width: '60px', height: '60px' }}
        />
      </Grid>
      <Grid item md={10}>
        <Link to={`/ingredients/${ingredient._id}`}>
          <span className="text-muted text-center text-capitalize">
            {ingredient.name}
          </span>
        </Link>
      </Grid>
    </Grid>
  </div>
);

IngredientItem.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(IngredientItem);
