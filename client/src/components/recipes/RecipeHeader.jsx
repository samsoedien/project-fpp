import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Tooltip,
  Zoom,
} from '@material-ui/core';
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@material-ui/icons';

import ScrollWrapper from '../../wrappers/ScrollWrapper';

const styles = theme => ({
  recipeHeaderParallax: {
    position: 'relative',
    minHeight: '560px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
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
});

const RecipeHeader = ({
  recipeImage,
  recipeFavorites,
  isFavorited,
  onFavoriteClick,
  classes,
}) => {

  console.log(isFavorited);
  const onFavoriteHandle = () => {
    onFavoriteClick();
  };

  const handleScroll = (scrollDistance) => {
    const parallaxItem = document.getElementById('myHeader');
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / 2}px)`;
  };

  return (
    <div className="recipe-header">
      <ScrollWrapper onWindowScroll={handleScroll}>
        <header className={classes.recipeHeaderParallax} id="myHeader" style={{ backgroundImage: `url(${recipeImage})` }}>
          <div className={classes.recipeHeaderOverlay} />
          <Tooltip title={`${recipeFavorites.length} chef(s) loved this recipe`} placement="top" TransitionComponent={Zoom}>
            <IconButton onClick={onFavoriteHandle} className={classes.recipeHeaderFavoriteButton}>
              <FavoriteIcon className={isFavorited ? classes.recipeHeaderIconFavorited : classes.recipeHeaderIcon} />
            </IconButton>
          </Tooltip>
          <IconButton onClick={onFavoriteHandle} className={classes.recipeHeaderShareButton}>
            <ShareIcon className={classes.recipeHeaderIcon} />
          </IconButton>
        </header>
      </ScrollWrapper>
    </div>
  );
};

RecipeHeader.propTypes = {
  recipeFavorites: PropTypes.array.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(RecipeHeader);
