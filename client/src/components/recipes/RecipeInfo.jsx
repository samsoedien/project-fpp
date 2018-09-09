import React from 'react';
import RecipeBadges from './RecipeBadges';

export default (props) => {
  return (
    <div className="recipe-info">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <small className="text-muted text-left text-uppercase">Culinary: {props.recipe.culinary}</small>
            <h1 className="page-header text-left text-capitalize">{props.recipe.title}</h1>
            <RecipeBadges recipe={props.recipe} />
            <p className="lead text-left">{props.recipe.description}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
