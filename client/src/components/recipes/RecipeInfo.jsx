import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import isEmpty from '../../utils/is-empty';
import RecipeChips from './RecipeChips';

const styles = theme => ({
  recipeTitle: {
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const RecipeInfo = ({ recipe, classes }) => {
  return (
    <div className="recipe-info">
      <Container>
        <Row className={classes.center}>
          <Col md="8" style={{ minHeight: '360px' }}>
            <small className="text-muted text-left text-uppercase">
              Cuisine: {recipe.cuisine}
            </small>
            <Typography variant="h2" className={classes.recipeTitle}>{recipe.title}</Typography>
            <RecipeChips recipe={recipe.settings} />
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

RecipeInfo.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    cuisine: PropTypes.string,
    description: PropTypes.string,
    settings: PropTypes.array,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeInfo);
