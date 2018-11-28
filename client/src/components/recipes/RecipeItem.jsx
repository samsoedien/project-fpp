import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

import img from '../../assets/img/foodprinted_sidedish.jpg';

const RecipeItem = ({ recipe }) => (
  <Col md="4" sm="6">
    <div className="recipe-item">
      <Link to={`/recipes/${recipe._id}`} className="btn text-dark">
        <Card className="bg-light mb-3">
          <CardImg src={img} alt="" top />
          <CardBody>
            <CardTitle className="text-capitalize">{recipe.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              {recipe.ingredient}
            </CardSubtitle>
            <CardText>Description of recipe</CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  </Col>
);

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    ingredient: PropTypes.object.isRequired,
  }).isRequired,
};

export default RecipeItem;
