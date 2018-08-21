import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getRecipe } from '../../actions/recipeActions';
import Spinner from '../common/Spinner';

import RecipeItem from '../recipes/RecipeItem';
import ThreeContainer from '../three/ThreeContainer';
import ThreeScene from '../three/ThreeScene';
import RecipeNutritions from './RecipeNutritions';

class Recipe extends Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  render() {
    const { recipe, loading } = this.props.recipe;
    let recipeContent;

    if (recipe === null || loading) {
      recipeContent = <Spinner />;
    } else {
      recipeContent = (
        <div>
          <h1>{recipe.title}</h1>
          <ThreeScene width="400" height="280" />
          <RecipeNutritions kcal="180" />
        </div>
      );
    }

    return (
      <div className="recipe">
        <div className="">
          {recipeContent}
        </div>
      </div>
    )
  }
}

Recipe.propTypes = {
  getRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipe })(Recipe);
