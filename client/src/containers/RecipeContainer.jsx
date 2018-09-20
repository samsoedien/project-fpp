import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipe } from '../actions/recipeActions';

import Recipe from '../components/recipes/Recipe';

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourited: false,
    };
  }

  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  render() {
    const { recipe, loading } = this.props.recipe;
    return (
      <div className="recipe-container">
        <Recipe recipe={recipe} loading={loading} isFavourited={this.state.isFavourited} />
      </div>
    )
  }
}

RecipeContainer.propTypes = {
  getRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipe })(RecipeContainer);
