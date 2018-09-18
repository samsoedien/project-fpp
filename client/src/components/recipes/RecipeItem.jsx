import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img/foodprinted_sidedish.jpg';

const RecipeItem = props => (
  <div className="col-md-4 col-sm-6">
    <Link to={`/recipes/${props.recipe._id}`} className="btn text-dark">
      <div className="card bg-light mb-3">
        <img src={img} alt="" className="card-img-top" />
        <div className="card-block card-body">
          <h4 className="card-title text-capitalize">{props.recipe.title}</h4>
          <h6 className="car-subtitle mb-2 text-muted">{props.recipe.ingredient}</h6>
          <p className="card-text">Description of recipe</p>
        </div>
      </div>
    </Link>
  </div>
);

export default RecipeItem;

// FIXME: Cannot start with a parent div of className="recipe-item" due to conflicting bootstrap grid system
