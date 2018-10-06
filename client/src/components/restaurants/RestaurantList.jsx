import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

import RestaurantItem from './RestaurantItem';
import SearchBar from '../common/SearchBar';
import Three from '../three/Three';

const RestaurantList = ({
  restaurants,
  filterText,
  filterUpdate,
  loading,
}) => {
  const filterCallback = (val) => {
    filterUpdate(val);
  };

  let restaurantItems;
  if (restaurants === null || loading) {
    restaurantItems = <Spinner />;
  } else {
    if (restaurants.length > 0) {
      restaurantItems = restaurants
        .filter(restaurant => {
          // remove names that do not match current filter text
          return restaurant.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .map(restaurant => (
          <RestaurantItem key={restaurant._id} restaurant={restaurant} />
        ));
    } else {
      restaurantItems = <h4>No Restaurants found...</h4>;
    }
  }
  return (
    <div className="restaurant-list">

      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="" className="btn btn-primary my-2">Main call to action</a>
            <a href="" className="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div className="container">
        <h4 className="text-center text-uppercase">Search Restaurants</h4>
        <SearchBar
          filterText={filterText}
          filterUpdate={filterUpdate}
          filterCallback={filterCallback}
        />
      </div>


      <div className="container">
        <div className="row">
          {restaurantItems}
        </div>
        <Three />
      </div>
    </div>
  );
};

RestaurantList.propTypes = {
  restaurants: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  filterUpdate: PropTypes.func.isRequired,
}

export default RestaurantList;
