import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipe, addRecipeComment, likeRecipeComment, favoriteRecipe } from '../actions/recipeActions';

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
    this.props.getRecipe(this.props.match.params.id);
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
    this.props.likePost(id, likeData, this.props.history); // need third parameter of recipeid
    console.log(isLiked);
  }

  onDeleteCallback(id) {
    this.props.deletePost(id);
  }

  onFavoriteHandleCallback(id) {
    this.setState(prevState => ({
      isFavorited: !prevState.isFavorited,
    }));
    const { isFavorited } = this.state;
    const favoriteData = {
      isFavorited,
    };
    this.props.favoriteRecipe(id, favoriteData, this.props.history);
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
    const { user } = this.props.auth;
    const { recipe } = this.props.recipe;
    const { text } = this.state;
    const postData = {
      text,
      name: user.name,
      avatar: user.avatar,
    };
    this.props.addRecipeComment(recipe._id, postData, this.props.history);

    this.setState({ text: '' });
  }

  getDerivedStateFromProps() {
    const { recipe } = this.props.recipe;
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
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  favorites: state.favorites,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { getRecipe, favoriteRecipe, addRecipeComment, likeRecipeComment })(RecipeContainer);
