import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getRecipe,
  favoriteRecipe,
  deleteRecipe,
  addRecipeComment,
  likeRecipeComment,
  flagRecipeComment,
  deleteRecipeComment,
} from '../actions/recipeActions';

import Recipe from '../components/recipes/Recipe';

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      isFavorited: false,
      isLiked: false,
      isFlagged: false,
      comment: '',
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
    this.onCancelCallback = this.onCancelCallback.bind(this);
    this.onLikeCallback = this.onLikeCallback.bind(this);
    this.onFlagCallback = this.onFlagCallback.bind(this);
    this.onReplyCallback = this.onReplyCallback.bind(this);
    this.onEditCallback = this.onEditCallback.bind(this);
    this.onDeleteCallback = this.onDeleteCallback.bind(this);
    this.onDeletePostCallback = this.onDeletePostCallback.bind(this);
    this.onFavoriteCallback = this.onFavoriteCallback.bind(this);
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

  onLikeCallback(postId) {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }));
    const { isLiked } = this.state;
    const likeData = {
      isLiked,
    };
    const { likeRecipeComment, recipe: { recipe } } = this.props;
    likeRecipeComment(recipe._id, postId, likeData);
  }

  onFlagCallback(postId) {
    this.setState(prevState => ({
      isFlagged: !prevState.isFlagged,
    }));
    const { isFlagged } = this.state;
    const flaggedData = {
      isFlagged,
    };
    const { flagRecipeComment, recipe: { recipe } } = this.props;
    flagRecipeComment(recipe._id, postId, flaggedData);
  }

  onReplyCallback(user) {
    this.setState({
      comment: `@${user}`,
    });
  }

  onEditCallback(id) {
    this.setState({
      editable: true,
    });
  }

  onDeletePostCallback(id) {
    const { deleteRecipeComment } = this.props;
    deleteRecipeComment(id);
  }

  onDeleteCallback(id) {
    const { deleteRecipe } = this.props;
    deleteRecipe(id);
  }

  onFavoriteCallback() {
    this.setState(prevState => ({
      isFavorited: !prevState.isFavorited,
    }));
    const { isFavorited } = this.state;
    const favoriteData = {
      isFavorited,
    };
    const { favoriteRecipe, recipe: { recipe } } = this.props;
    favoriteRecipe(recipe._id, favoriteData);
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCancelCallback() {
    this.setState({
      comment: '',
    });
  }

  onSubmitCallback() {
    const {
      recipe: { recipe },
      auth: { user },
      addRecipeComment,
    } = this.props;
    const { comment } = this.state;
    const postData = {
      comment,
      name: user.name,
      avatar: user.avatar,
    };
    addRecipeComment(recipe._id, postData);
    this.setState({ comment: '' });
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

  findUserLikes(likes) {
    const { auth } = this.props;
    if (likes.filter(likes => likes.user === auth.user.id).length > 0) {
      return this.setState({
        isLiked: true,
      });
    }
    return false;
  }

  render() {
    const { recipe: { recipe, loading }, auth } = this.props;
    const {
      editable,
      isFavorited,
      isLiked,
      isFlagged,
      comment,
      errors,
    } = this.state;
    return (
      <div className="recipe-container">
        <Recipe
          recipe={recipe}
          loading={loading}
          auth={auth}
          editable={editable}
          isFavorited={isFavorited}
          isLiked={isLiked}
          isFlagged={isFlagged}
          comment={comment}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onCancelCallback={this.onCancelCallback}
          onSubmitCallback={this.onSubmitCallback}
          onLikeCallback={this.onLikeCallback}
          onFlagCallback={this.onFlagCallback}
          onReplyCallback={this.onReplyCallback}
          onEditCallback={this.onEditCallback}
          onDeleteCallback={this.onDeleteCallback}
          onDeletePostCallback={this.onDeletePostCallback}
          onFavoriteCallback={this.onFavoriteCallback}
        />
      </div>
    );
  }
}

RecipeContainer.propTypes = {
  getRecipe: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  favoriteRecipe: PropTypes.func.isRequired,
  addRecipeComment: PropTypes.func.isRequired,
  likeRecipeComment: PropTypes.func.isRequired,
  flagRecipeComment: PropTypes.func.isRequired,
  deleteRecipeComment: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    recipe: PropTypes.object,
    loading: PropTypes.bool,
  }).isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
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
  deleteRecipe,
  addRecipeComment,
  likeRecipeComment,
  flagRecipeComment,
  deleteRecipeComment,
})(RecipeContainer);
