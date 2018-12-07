import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Chip,
} from '@material-ui/core';

import isEmpty from '../../utils/is-empty';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const RecipeChips = ({ recipe, classes }) => {
  let recipeChips;
  if (recipe) recipeChips = <Chip label="Vegetarian" className={classes.chip} variant="outlined" color="primary" />;

  return (
    <div className="recipe-chips">
      <Container>
        <Row>
          {recipeChips}
        </Row>
      </Container>
    </div>
  );
};

RecipeChips.propTypes = {
  recipe: PropTypes.object,
};

export default withStyles(styles)(RecipeChips);
