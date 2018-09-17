import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantItem = props => (
  <div className="restaurant-item">
    <div className="col-md-10">
      <Link to={`/restaurants/${props.restaurant._id}`} className="btn text-dark">
        <div className="card bg-light mb-3">
          {props.restaurant.name}
        </div>
      </Link>
    </div>
  </div>
);

export default RestaurantItem;