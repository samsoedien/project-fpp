import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Carousel from '../common/Carousel';
// import GridList from '../common/GridList';
import Loader from '../common/Loader';

const RecipeFeatured = ({
  recipes,
  loading,
}) => {
  let recipeFeatured;
  if (recipes === null || loading) {
    recipeFeatured = <Loader />;
  } else if (recipes.length > 0) {
    recipeFeatured = <Carousel />;
  } else {
    recipeFeatured = <h4>No Featured Recipes found...</h4>;
  }
  return (
    <div className="recipe-list">
      <Container>
        {/* <GridList /> */}
        {recipeFeatured}
      </Container>
    </div>
  );
};

RecipeFeatured.propTypes = {
  recipes: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default RecipeFeatured;

