import React from 'react';
import isEmpty from '../../utils/is-empty';

import RecipeBadges from './RecipeBadges';

export default props => {
  return (
    <div className="recipe-info">
      <div className="container p-3">
        <div className="row">
          <div className="col-md-8" style={{ minHeight: '360px' }}>
            <small className="text-muted text-left text-uppercase">
              Culinary: {props.recipe.culinary}
            </small>
            <h1 className="page-header text-left text-capitalize mb-2 fancy-font">
              {props.recipe.title}
            </h1>
            <p className="lead text-left paragraph-font">
              {isEmpty(props.recipe.description) ? (
                <span>No description written yet</span>
              ) : (
                props.recipe.description
              )}
            </p>
          </div>
        </div>
        <RecipeBadges recipe={props.recipe} />
      </div>
    </div>
  );
};
