import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Container, Row } from 'reactstrap';
import Loader from '../common/Loader';

import RecipeItem from './RecipeItem';
import SearchBar from '../common/SearchBar';

const RecipeList = ({
  recipes,
  filterText,
  filterUpdate,
  loading,
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
        <CSSTransition key={recipe._id} timeout={500} classNames="move">
          <RecipeItem key={recipe._id} recipe={recipe} />
        </CSSTransition>
      ));
  } else {
    recipeItems = <h4>No Recipes found...</h4>;
  }
  return (
    <div className="recipe-list">
      <Container>
        <h4 className="text-center text-uppercase">Search Recipes</h4>
        <SearchBar
          filterText={filterText}
          filterUpdate={filterUpdate}
          filterCallback={filterCallback}
        />
      </Container>

      <Container>
        <Row>{recipeItems}</Row>
      </Container>

      <Container>
        <Link to="/create-recipe" className="btn btn-lg btn-info">
          Create Recipe
        </Link>
      </Container>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  filterUpdate: PropTypes.func.isRequired,
};

export default RecipeList;

// FIXME: implement CSS transition
