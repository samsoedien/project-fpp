import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRestaurants } from '../actions/restaurantActions';

import RestaurantList from '../components/restaurants/RestaurantList';
import RestaurantFormContainer from './RestaurantFormContainer';

class RestaurantListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.filterListUpdate = this.filterListUpdate.bind(this);
  }

  componentDidMount() {
    this.props.getRestaurants();
  }

  filterListUpdate(value) {
    console.log(value);
    this.setState({
      filterText: value,
    });
  }

  render() {
    const { restaurants, loading } = this.props.restaurant;
    const { filterText } = this.state;
    return (
      <div className="restaurant-list-container">
        <RestaurantFormContainer />
        <RestaurantList
          restaurants={restaurants}
          loading={loading}
          filterText={filterText}
          filterUpdate={this.filterListUpdate}
        />
      </div>
    );
  }
}

RestaurantListContainer.propTypes = {
  getRestaurants: PropTypes.func.isRequired,
  restaurant: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  restaurant: state.restaurant,
});

export default connect(mapStateToProps, { getRestaurants })(RestaurantListContainer);