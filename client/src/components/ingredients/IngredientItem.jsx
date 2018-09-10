import React from 'react';

const IngredientItem = props => (
  <div>
    {props.ingredient.name}
  </div>
);

export default IngredientItem;

// TODO: Cannot start with a parent div of className="recipe-item" due to conflicting bootstrap grid system
