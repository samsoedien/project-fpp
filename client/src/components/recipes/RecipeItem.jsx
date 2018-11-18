import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

import img from '../../assets/img/foodprinted_sidedish.jpg';

const RecipeItem = ({ recipe }) => (
  <Col md="4" sm="6">
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
  </Col>
);

RecipeItem.PropTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeItem;

// FIXME: Cannot start with a parent div of className="recipe-item" due to conflicting bootstrap grid system
