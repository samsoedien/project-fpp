import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipe, favoriteRecipe } from '../actions/recipeActions';

import Recipe from '../components/recipes/Recipe';
import PostListContainer from './PostListContainer';

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: false,
    };
    this.onFavoriteHandleCallback = this.onFavoriteHandleCallback.bind(this);
  }

  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  onFavoriteHandleCallback() {
    this.setState(prevState => ({
      isFavorited: !prevState.isFavorited,
    }));
    const { isFavorited } = this.state;
    const favoriteData = {
      isFavorited,
    };
    this.props.favoriteRecipe(favoriteData, this.props.history);
  }

  render() {
    const { recipe, loading } = this.props.recipe;
    const { isFavorited } = this.state;
    return (
      <div className="recipe-container">
        <Recipe recipe={recipe} loading={loading} isFavorited={isFavorited} onFavoriteHandleCallback={this.onFavoriteHandleCallback} />
        {/* <PostListContainer /> */}
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
  favorites: state.favorites,
});

export default connect(mapStateToProps, { getRecipe, favoriteRecipe })(RecipeContainer);

// TODO: change isFavorite to favorite props instead of state and add routes, controller and model