import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Carousel from '../common/Carousel';
import GridList from '../common/GridList';
import Loader from '../common/Loader';

const styles = theme => ({
  root: {
    paddingTop: '120px',
  },
});

const RecipeFeatured = ({
  recipes,
  loading,
  classes,
}) => {
  let recipeFeatured;
  if (recipes === null || loading) {
    recipeFeatured = <Loader />;
  } else if (recipes.length > 0) {
    recipeFeatured = <GridList recipes={recipes}/>;
  } else {
    recipeFeatured = <h4>No Featured Recipes found...</h4>;
  }
  return (
    <div className={classes.root}>
      <Container>
        {recipeFeatured}
      </Container>
    </div>
  );
};

RecipeFeatured.propTypes = {
  recipes: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeFeatured);

