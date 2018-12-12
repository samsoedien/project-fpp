import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';

import ThreeContainer from '../../containers/ThreeContainer';
import Loader from '../common/Loader';
import RecipeHeader from './RecipeHeader';
import RecipeInfo from './RecipeInfo';
import RecipeProfileCard from './RecipeProfileCard';
import PostFeed from '../posts/PostFeed';
import PostForm from '../posts/PostForm';

const styles = theme => ({
  caption: {
    textAlign: 'center',
  },
});

const Recipe = ({
  recipe,
  loading,
  auth,
  comment,
  isFavorited,
  isLiked,
  isFlagged,
  onChangeCallback,
  onCancelCallback,
  onSubmitCallback,
  onLikeCallback,
  onFlagCallback,
  onReplyCallback,
  onEditCallback,
  onDeleteCallback,
  onFavoriteCallback,
  errors,
  classes,
}) => {
  const onChangeHandle = e => {
    onChangeCallback(e);
  };

  const onCancelHandle = () => {
    onCancelCallback();
  };

  const onSubmitHandle = () => {
    onSubmitCallback();
  };

  const onEditHandle = () => {
    onEditCallback();
  };

  const onDeleteHandle = id => {
    onDeleteCallback(id);
  };

  const onFavoriteHandle = () => {
    onFavoriteCallback();
  };

  const onLikeHandle = id => {
    onLikeCallback(id);
  };

  const onReplyHandle = user => {
    onReplyCallback(user);
  };

  const onFlagHandle = id => {
    onFlagCallback(id);
  };

  let recipeContent;
  if (recipe === null || loading) {
    recipeContent = <Loader />;
  } else {
    recipeContent = (
      <div>
        <RecipeHeader
          recipe={recipe}
          auth={auth}
          isFavorited={isFavorited}
          onEditHandle={onEditHandle}
          onDeleteHandle={onDeleteHandle}
          onFavoriteHandle={onFavoriteHandle}
        />
        <RecipeInfo recipe={recipe} auth={auth} />
        <RecipeProfileCard recipe={recipe} />
        <ThreeContainer recipe={recipe} width="600px" height="400px" />
        {auth.isAuthenticated ? (
          <PostForm
            comment={comment}
            errors={errors}
            onChangeHandle={onChangeHandle}
            onCancelHandle={onCancelHandle}
            onSubmitHandle={onSubmitHandle}
          />
        ) : <Typography variant="caption" className={classes.caption}>Signin to place a comment</Typography>}
        <PostFeed
          posts={recipe.posts}
          loading={loading}
          auth={auth}
          isLiked={isLiked}
          isFlagged={isFlagged}
          onLikeHandle={onLikeHandle}
          onFlagHandle={onFlagHandle}
          onReplyHandle={onReplyHandle}
          onDeleteHandle={onDeleteHandle}
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
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
  comment: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  isLiked: PropTypes.bool.isRequired,
  isFlagged: PropTypes.bool.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onCancelCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onLikeCallback: PropTypes.func.isRequired,
  onFlagCallback: PropTypes.func.isRequired,
  onReplyCallback: PropTypes.func.isRequired,
  onEditCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
  onFavoriteCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line

};

export default withStyles(styles)(Recipe);
