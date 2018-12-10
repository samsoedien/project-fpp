import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

import RecipeItem from './RecipeItem';
import RecipeFeatured from './RecipeFeatured';
import Loader from '../common/Loader';
import SearchBar from '../common/SearchBar';

const styles = theme => ({
  recipeSearch: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const RecipeList = ({
  recipes,
  filterText,
  filterUpdate,
  loading,
  classes,
}) => {
  const filterCallback = val => {
    filterUpdate(val);
  };

  let recipeItems;
  if (recipes === null || loading) {
    recipeItems = <Loader />;
  } else if (recipes.length > 0) {
    recipeItems = recipes
      .filter(recipe => {
        // remove names that do not match current filter text
        return (
          recipe.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        );
      })
      .map(recipe => (
        <RecipeItem key={recipe._id} recipe={recipe} />
      ));
  } else {
    recipeItems = <h4>No Recipes found...</h4>;
  }
  return (
    <div className="recipe-list">
      <RecipeFeatured recipes={recipes} loading={loading} />
      <Container>
        <Paper elevation="4" className={classes.recipeSearch}>
          <SearchBar
            searchLabel="Search Recipes"
            filterText={filterText}
            filterUpdate={filterUpdate}
            filterCallback={filterCallback}
          />
        </Paper>
      </Container>

      <Container>
        <Row>
          {recipeItems}
        </Row>
      </Container>
    </div >
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  filterUpdate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeList);
