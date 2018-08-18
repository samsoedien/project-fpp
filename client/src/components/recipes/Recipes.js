import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import RecipeItem from './RecipeItem';
import { getRecipes } from '../../actions/recipeActions';

class Recipes extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    const { recipes, loading } = this.props.recipe;
    let recipeItems;

    if (recipes === null || loading) {
      recipeItems = <Spinner />;
    } else {
      if (recipes.length > 0) {
        recipeItems = recipes.map(recipe => (
          <RecipeItem key={recipe._id} recipe={recipe} />
        ));
      } else {
        recipeItems = <h4>No Recipes found...</h4>;
      }
    }
    return (
      <div>
        {recipeItems}
        <Link to="/create-recipe" className="btn btn-lg btn-info">
          Create Recipe
        </Link>
      </div>
    );
  }
};

Recipes.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipes })(Recipes);
