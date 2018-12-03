import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import isEmpty from '../../utils/is-empty';

import RecipeBadges from './RecipeBadges';

export default props => {
  return (
    <div className="recipe-info">
      <Container className="p-3">
        <Row>
          <Col md="8" style={{ minHeight: '360px' }}>
            <small className="text-muted text-left text-uppercase">
              Culinary: {props.recipe.culinary}
            </small>
            <h1 className="page-header text-left text-capitalize mb-2 fancy-font">
              {props.recipe.title}
            </h1>
            <p className="lead text-left paragraph-font">
              {isEmpty(props.recipe.description) ? (
                <span>No description written yet</span>
              ) : (
                  props.recipe.description
                )}
            </p>
          </Col>
        </Row>
        <RecipeBadges recipe={props.recipe} />
      </Container>
    </div>
  );
};
