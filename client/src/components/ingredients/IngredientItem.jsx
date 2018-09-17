import React from 'react';
import testImg from '../../assets/img/foodprinted_sidedish.jpg';

const IngredientItem = props => (
  <div className="ingredient-item">
    <div className="container">
      <div className="row p-1">
        <div className="col-md-2">
          <img src={testImg} alt="" className="bg-secondary rounded-circle" style={{ width: '60px', height: '60px' }} />
        </div>
        <div className="col-md-10">
          <span className="text-muted text-center text-capitalize">{props.ingredient.name}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default IngredientItem;
