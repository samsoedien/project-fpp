import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { Container, Row, Col } from 'reactstrap';

const Ingredient = ({ ingredient, loading }) => {
  let ingredientContent;
  if (ingredient === null || loading) {
    ingredientContent = <Spinner />;
  } else {
    ingredientContent = (
      <div>
        <p className="lead">
          Please specify the nutrition values of the ingredient per 100 grams
        </p>
        <span>{ingredient.name}</span>
      </div>
    );
  }

  return (
    <div className="ingredient">
      <Container>{ingredientContent}</Container>
    </div>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Ingredient;
