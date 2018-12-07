import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import isEmpty from '../../utils/is-empty';

import RecipeChips from './RecipeChips';

export default ({ recipe }) => {
  return (
    <div className="recipe-info">
      <Container>
        <Row>
          <Col md="8" style={{ minHeight: '360px' }}>
            <small className="text-muted text-left text-uppercase">
              Culinary: {recipe.culinary}
            </small>
            <Typography variant="h2">{recipe.title}</Typography>
            <RecipeChips recipe={recipe} />
            <Typography variant="paragraph">
              {isEmpty(recipe.description) ? (
                <span>No description written yet</span>
              ) : (
                  recipe.description
                )}
            </Typography>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
