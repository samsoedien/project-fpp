import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from  'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Divider,
  TextField,
} from '@material-ui/core';

import ThreeContainer from '../../containers/ThreeContainer';
import RecipeHeader from './RecipeHeader';
import ProfileCard from '../profiles/ProfileCard';
import RecipeChips from './RecipeChips';
import Nutritions from '../ingredients/Nutritions';
import PostFeed from '../posts/PostFeed';
import PostForm from '../posts/PostForm';
import Loader from '../common/Loader';
import isEmpty from '../../utils/is-empty';

const styles = theme => ({
  root: {
  },
  recipeTypography: {
    position: 'relative',
    top: '-90px',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  recipeDescription: {
    textAlign: 'center',
  },
  recipeDivider: {
    position: 'relative',
    top: '-50px',
  },
  recipeData: {
    // padding: '24px 0',
  },
  three: {
    border: 'red 1px solid',
  },
  recipeCaption: {
    position: 'relative',
    top: '-50px',
    margin: '12px 0',
    textAlign: 'center',
  },
});

const Recipe = ({
  recipe,
  loading,
  auth,
  comment,
  volume,
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
  onVolumeContainerCallback,
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

  const onVolumeCallback = vol => {
    onVolumeContainerCallback(vol);
    // const recipeVol = vol;
  };

  const onTextChange = e => {

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
        <ProfileCard user={recipe.user} />

        <div className={classes.recipeData}>
          <Grid container justify="center">
            <Grid item md={8}>
              <Typography variant="h3" className={classes.recipeTypography}>{recipe.title}</Typography>
              <Typography variant="caption" className={classes.recipeCaption}>{volume / 100}{' g  |  '}{recipe.dimensions}{' (mm)  |  '}{recipe.printTime}</Typography>

              <Divider variant="center" className={classes.recipeDivider} />
              {/* <RecipeChips recipe={recipe.settings} /> */}
              {isEmpty(recipe.description)
                ? (<Typography paragraph variant="caption" className={classes.recipeDescription}>No description written yet</Typography>)
                : (<Typography paragraph variant="paragraph" className={classes.recipeDescription}>{recipe.description}</Typography>)}
              {recipe.cadText ? (
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Type your Message"
                  type="text"
                  name="recipe.cadText"
                  value={recipe.cadText}
                  onChange={onTextChange}
                />
              ) : null}
            </Grid>
          </Grid>
        </div>
        <ThreeContainer onVolumeCallback={onVolumeCallback} recipe={recipe} cad={recipe.cad} cadText={recipe.cadText} width="600px" height="400px" />
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container spacing={16}>
              <Grid item xs={12} md={12}>
                <Nutritions recipe={recipe} volume={volume} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {
          auth.isAuthenticated ? (
            <PostForm
              comment={comment}
              errors={errors}
              onChangeHandle={onChangeHandle}
              onCancelHandle={onCancelHandle}
              onSubmitHandle={onSubmitHandle}
            />
          ) : <Typography variant="caption" className={classes.caption}>Signin to place a comment</Typography>
        }
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
      </div >
    );
  }
  return <div className={classes.root}>{recipeContent}</div>;
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    cuisine: PropTypes.string,
    description: PropTypes.string,
    settings: PropTypes.array,
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
