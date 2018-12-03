import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import RestaurantItem from './RestaurantItem';
import SearchBar from '../common/SearchBar';
import Loader from '../common/Loader';

const RestaurantList = ({ restaurants, filterText, filterUpdate, loading }) => {
  const filterCallback = val => {
    filterUpdate(val);
  };

  let restaurantItems;
  if (restaurants === null || loading) {
    restaurantItems = <Loader />;
  } else if (restaurants.length > 0) {
    restaurantItems = restaurants
      .filter(restaurant => {
        return (
          restaurant.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        );
      })
      .map(restaurant => (
        <RestaurantItem key={restaurant._id} restaurant={restaurant} />
      ));
  } else {
    restaurantItems = <h4>No Restaurants found...</h4>;
  }

  return (
    <div className="restaurant-list">
      <Grid container>
        <h4 className="text-center text-uppercase">Search Restaurants</h4>
        <SearchBar
          filterText={filterText}
          filterUpdate={filterUpdate}
          filterCallback={filterCallback}
        />
      </Grid>

      <Grid container justify="center">
        <Grid item>
          {restaurantItems}
        </Grid>
      </Grid>
    </div>
  );
};

RestaurantList.propTypes = {
  restaurants: PropTypes.shape({
    restaurant: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  filterUpdate: PropTypes.func.isRequired,
};

export default RestaurantList;
