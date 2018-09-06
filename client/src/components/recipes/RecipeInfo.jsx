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
            <p className="lead text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore expedita debitis consequatur neque repellendus sit repellat ullam, velit accusantium deleniti eligendi, vero nostrum consequuntur distinctio aperiam sequi quisquam vel blanditiis!</p>
          </div>
        </div>

      </div>
    </div>
  )
}
