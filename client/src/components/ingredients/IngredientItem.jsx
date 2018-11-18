import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import testImg from '../../assets/img/foodprinted_sidedish.jpg';

const IngredientItem = ({ ingredient }) => (
  <div className="ingredient-item">
    <Container>
      <Row className="p-1">
        <Col md="2">
          <img
            src={testImg}
            alt=""
            className="bg-secondary rounded-circle"
            style={{ width: '60px', height: '60px' }}
          />
        </Col>
        <Col md="10">
          <Link to={`/ingredients/${ingredient._id}`}>
            <span className="text-muted text-center text-capitalize">
              {ingredient.name}
            </span>
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
);

IngredientItem.propTypes = {
  ingredient: PropTypes.object.isRequired
};

export default IngredientItem;
