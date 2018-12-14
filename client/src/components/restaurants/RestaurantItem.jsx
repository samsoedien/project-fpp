import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = theme => ({

});

const RestaurantItem = ({ restaurant, classes }) => (
  <div className="restaurant-item">
    <Grid item md={10}>
      <Link to={`/restaurants/${restaurant._id}`} className="btn text-dark">
        <div className="card bg-light mb-3">{restaurant.name}</div>
      </Link>
    </Grid>
  </div>
);

RestaurantItem.propTypes = {
  restaurant: PropTypes.shape({}).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RestaurantItem);
