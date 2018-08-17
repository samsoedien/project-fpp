import React, { Component } from 'react'

class RecipeItem extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <div>
        <h1>RECIPEITEM</h1>
        <p>{recipe.title}</p>
        <p>{recipe.ingredient}</p>
      </div>
    )
  }
}

export default RecipeItem;