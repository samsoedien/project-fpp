import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeItem extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <div className="recipe-item">
        <Link to={`/recipes/${recipe._id}`}>
          <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-6">
                <h4>{recipe.title}</h4>
                <p>{recipe.ingredient}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default RecipeItem;
