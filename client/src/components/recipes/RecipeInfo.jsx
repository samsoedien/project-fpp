import React from 'react';
import RecipeBadges from './RecipeBadges';

export default (props) => {
  return (
    <div className="recipe-info">
      <div className="container p-3">
        <div className="row">
          <div className="col-md-8">
            <small className="text-muted text-left text-uppercase">Culinary: {props.recipe.culinary}</small>
            <h1 className="page-header text-left text-capitalize mb-2">{props.recipe.title}</h1>
            <p className="lead text-left">{props.recipe.description}</p>
            <RecipeBadges recipe={props.recipe} />
          </div>
        </div>

      </div>
    </div>
  )
}
