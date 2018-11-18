import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Spinner from '../common/Spinner';

import RecipeItem from './RecipeItem';
import SearchBar from '../common/SearchBar';

const RecipeList = ({ recipes, filterText, filterUpdate, loading }) => {
  const filterCallback = val => {
    filterUpdate(val);
  };

  let recipeItems;
  if (recipes === null || loading) {
    recipeItems = <Spinner />;
  } else {
    if (recipes.length > 0) {
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
  }
  return (
    <div className="recipe-list">
      <Jumbotron>
        <h1 className="jumbotron-heading">Album example</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <p>
          <a href="" className="btn btn-primary my-2">
            Main call to action
          </a>
          <a href="" className="btn btn-secondary my-2">
            Secondary action
          </a>
        </p>
      </Jumbotron>

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
  recipes: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  filterUpdate: PropTypes.func.isRequired
};

export default RecipeList;

// FIXME: implement CSS transition
