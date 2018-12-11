import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getRecipe,
  addRecipeComment,
  likeRecipeComment,
  favoriteRecipe,
} from '../actions/recipeActions';

import Recipe from '../components/recipes/Recipe';

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLiked: false,
      isFavorited: false,
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
    this.onCancelCallback = this.onCancelCallback.bind(this);
    this.onLikeCallback = this.onLikeCallback.bind(this);
    this.onDeleteCallback = this.onDeleteCallback.bind(this);
    this.onFavoriteHandleCallback = this.onFavoriteHandleCallback.bind(this);
  }

  componentDidMount() {
    const { getRecipe, match } = this.props;
    getRecipe(match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onLikeCallback(id) {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }));
    const { isLiked } = this.state;
    const likeData = {
      isLiked,
    };
    const { likeRecipeComment, history } = this.props;
    likeRecipeComment(id, likeData, history); // need third parameter of recipeid
    console.log(isLiked);
  }

  onDeleteCallback(id) {
    const { deletePost } = this.props;
    deletePost(id);
  }

  onFavoriteHandleCallback(id) {
    this.setState(prevState => ({
      isFavorited: !prevState.isFavorited,
    }));
    const { isFavorited } = this.state;
    const favoriteData = {
      isFavorited,
    };
    const { favoriteRecipe, history } = this.props;
    favoriteRecipe(id, favoriteData, history);
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCancelCallback() {
    this.setState({
      text: '',
    });
  }

  onSubmitCallback(e) {
    const {
      auth: { user },
      recipe: { recipe },
      addRecipeComment,
      history,
    } = this.props;
    const { text } = this.state;
    const postData = {
      text,
      name: user.name,
      avatar: user.avatar,
    };
    addRecipeComment(recipe._id, postData, history);

    this.setState({ text: '' });
  }

  getDerivedStateFromProps() {
    const { recipe: { recipe } } = this.props;
    this.findUserFavorites(recipe.favorites);
  }

  findUserFavorites(favorites) {
    const { auth } = this.props;
    if (favorites.filter(favorite => favorite.user === auth.user.id).length > 0) {
      return this.setState({
        isFavorited: true,
      });
    }
    return false;
  }

  render() {
    const { recipe: { recipe, loading }, auth } = this.props;
    const { isFavorited, text, errors } = this.state;
    return (
      <div className="recipe-container">
        <Recipe
          recipe={recipe}
          loading={loading}
          auth={auth}
          isFavorited={isFavorited}
          text={text}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onCancelCallback={this.onCancelCallback}
          onSubmitCallback={this.onSubmitCallback}
          onLikeCallback={this.onLikeCallback}
          onDeleteCallback={this.onDeleteCallback}
          onFavoriteHandleCallback={this.onFavoriteHandleCallback}
        />
      </div>
    );
  }
}

RecipeContainer.propTypes = {
  getRecipe: PropTypes.func.isRequired,
  favoriteRecipe: PropTypes.func.isRequired,
  addRecipeComment: PropTypes.func.isRequired,
  likeRecipeComment: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    recipe: PropTypes.object,
    loading: PropTypes.bool,
  }).isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
  match: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  favorites: state.favorites,
  auth: state.auth,
  errors: state.errors,

});

export default connect(mapStateToProps, {
  getRecipe,
  favoriteRecipe,
  addRecipeComment,
  likeRecipeComment,
})(RecipeContainer);
