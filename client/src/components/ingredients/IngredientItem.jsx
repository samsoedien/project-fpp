import React from 'react';
import { Link } from 'react-router-dom';
import testImg from '../../assets/img/foodprinted_sidedish.jpg';

const IngredientItem = props => (
  <div className="ingredient-item">
    <div className="container">
      <div className="row p-1">
        <div className="col-md-2">
          <img src={testImg} alt="" className="bg-secondary rounded-circle" style={{ width: '60px', height: '60px' }} />
        </div>
        <div className="col-md-10">
          <Link to={`/ingredients/${props.ingredient._id}`}><span className="text-muted text-center text-capitalize">{props.ingredient.name}</span></Link>
        </div>
      </div>
    </div>
  </div>
);

export default IngredientItem;
