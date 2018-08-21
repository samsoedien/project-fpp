import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img/foodprinted_sidedish.jpg';

const RecipeItem = props => (
  <div className="recipe-item">
    <div className="card card-body bg-light mb-3">
      <img src={img} alt="Card image cap" className="card-img-top" />
      <div className="card-block">
        <h4 className="card-title">{props.recipe.title}</h4>
        <h6 className="car-subtitle mb-2 text-muted">{props.recipe.ingredient}</h6>
        <p className="card-text">Description of recipe</p>
        <Link to={`/recipes/${props.recipe._id}`} className="btn btn-primary">See Recipe</Link>
      </div>
    </div>
  </div>
);

export default RecipeItem;
