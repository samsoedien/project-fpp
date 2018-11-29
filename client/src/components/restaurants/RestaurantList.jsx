import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Loader from '../common/Loader';

import RestaurantItem from './RestaurantItem';
import SearchBar from '../common/SearchBar';

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
      <Container>
        <h4 className="text-center text-uppercase">Search Restaurants</h4>
        <SearchBar
          filterText={filterText}
          filterUpdate={filterUpdate}
          filterCallback={filterCallback}
        />
      </Container>

      <Container>
        <Row>{restaurantItems}</Row>
      </Container>
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
