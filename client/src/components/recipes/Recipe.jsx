import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import Loader from '../common/Loader';

import ThreeContainer from '../../containers/ThreeContainer';

import RecipeHeader from './RecipeHeader';
import RecipeInfo from './RecipeInfo';
import RecipeProfileCard from './RecipeProfileCard';
import ThreeNutritions from '../three/ThreeNutritions';
import RecipeCommentFeed from './RecipeCommentFeed';
import RecipeCommentForm from './RecipeCommentForm';

const Recipe = ({
  recipe,
  loading,
  auth,
  text,
  isFavorited,
  onChangeCallback,
  onCancelCallback,
  onSubmitCallback,
  onLikeCallback,
  onDeleteCallback,
  onFavoriteHandleCallback,
  errors,
}) => {


  const onChangeClick = e => {
    onChangeCallback(e);
  };

  const onCancelClick = () => {
    onCancelCallback();
  };

  const onSubmitClick = () => {
    onSubmitCallback();
  };

  const onFavoriteClick = id => {
    onFavoriteHandleCallback(id);
  };

  const onLikeClick = id => {
    onLikeCallback(id);
  };

  const onDeleteClick = id => {
    onDeleteCallback(id);
  };

  let recipeContent;
  if (recipe === null || loading) {
    recipeContent = <Loader />;
  } else {
    recipeContent = (
      <div>
        <RecipeHeader
          recipeImage={recipe.image}
          recipeFavorites={recipe.favorites}
          isFavorited={isFavorited}
          onFavoriteClick={onFavoriteClick.bind(this, recipe._id)} />
        <RecipeInfo recipe={recipe} />
        <RecipeProfileCard recipe={recipe} />
        <ThreeContainer recipe={recipe} width="600px" height="400px" />
        {auth.isAuthenticated ? (
          <RecipeCommentForm
            text={text}
            errors={errors}
            onChangeClick={onChangeClick}
            onCancelClick={onCancelClick}
            onSubmitClick={onSubmitClick}
          />
        ) : null}
        <RecipeCommentFeed
          posts={recipe.comments}
          loading={loading}
          auth={auth}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    );
  }
  return <div className="recipe">{recipeContent}</div>;
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onCancelCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onLikeCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
  onFavoriteHandleCallback: PropTypes.func.isRequired,
};

export default Recipe;
