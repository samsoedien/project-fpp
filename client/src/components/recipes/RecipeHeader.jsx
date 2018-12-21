import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  IconButton,
  Tooltip,
  Zoom,
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

import ScrollWrapper from '../../wrappers/ScrollWrapper';

const styles = theme => ({
  root: {
    marginTop: '-120px', // to take account for nav w/ herobanner
  },
  recipeHeaderParallax: {
    position: 'relative',
    minHeight: '560px',
    minWidth: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    zIndex: '100',
  },
  recipeHeaderOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .35), rgba(0, 0, 0, 0), rgba(0, 0, 0, .35))',
  },
  recipeHeaderFavoriteButton: {
    position: 'absolute',
    right: '24px',
    bottom: '24px',
  },
  recipeHeaderShareButton: {
    position: 'absolute',
    right: '96px',
    bottom: '24px',
  },
  recipeHeaderIcon: {
    color: theme.palette.common.white,
  },
  recipeHeaderIconFavorited: {
    color: theme.palette.primary.main,
  },
  recipeDeleteButton: {
    position: 'absolute',
    right: '20px',
    top: '100px',
  },
  recipeEditButton: {
    position: 'absolute',
    right: '196px',
    top: '100px',
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#FAFAFA',
      color: '#9E9E9E',
    },
  },
});

const RecipeHeader = ({
  recipe,
  auth,
  isFavorited,
  onEditHandle,
  onDeleteHandle,
  onFavoriteHandle,
  classes,
}) => {
  const onEdit = () => {
    onEditHandle();
  };

  const onDelete = () => {
    onDeleteHandle();
  };

  const onFavorite = () => {
    onFavoriteHandle();
  };

  const handleScroll = scrollDistance => {
    const parallaxItem = document.getElementById('myHeader');
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / 1.7}px)`;
  };

  return (
    <div className={classes.root}>
      <ScrollWrapper onWindowScroll={handleScroll}>
        <header className={classes.recipeHeaderParallax} id="myHeader" style={{ backgroundImage: `url(/${recipe.image})` }}>
          <div className={classes.recipeHeaderOverlay} />
          {recipe.user._id === auth.user.id ? (
            <Fragment>
              <Button variant="contained" color="secondary" className={classes.recipeDeleteButton} onClick={onDelete}>
                Delete Recipe
                <DeleteIcon />
              </Button>
              <Button variant="outlined" className={classes.recipeEditButton} onClick={onEdit}>Edit Recipe</Button>
            </Fragment>
          ) : null}

          <Tooltip title={`${recipe.favorites.length} chef(s) loved this recipe`} placement="top" TransitionComponent={Zoom}>
            <IconButton onClick={onFavorite} className={classes.recipeHeaderFavoriteButton}>
              <FavoriteIcon
                className={isFavorited
                  ? classes.recipeHeaderIconFavorited
                  : classes.recipeHeaderIcon}
              />
            </IconButton>
          </Tooltip>
          <IconButton className={classes.recipeHeaderShareButton}>
            <ShareIcon className={classes.recipeHeaderIcon} />
          </IconButton>
        </header>
      </ScrollWrapper>
    </div>
  );
};

RecipeHeader.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    favorited: PropTypes.array,
  }).isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  isFavorited: PropTypes.bool.isRequired,
  onEditHandle: PropTypes.func.isRequired,
  onDeleteHandle: PropTypes.func.isRequired,
  onFavoriteHandle: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeHeader);
