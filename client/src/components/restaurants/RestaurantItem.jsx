import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

const RestaurantItem = ({ restaurant }) => (
  <div className="restaurant-item">
    <Col md="10">
      <Link to={`/restaurants/${restaurant._id}`} className="btn text-dark">
        <div className="card bg-light mb-3">{restaurant.name}</div>
      </Link>
    </Col>
  </div>
);

RestaurantItem.PropTypes = {
  restaurant: PropTypes.object.isRequired
};

export default RestaurantItem;
