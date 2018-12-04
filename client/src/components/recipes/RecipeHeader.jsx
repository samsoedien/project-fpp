import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
} from '@material-ui/core';
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@material-ui/icons';

import ScrollWrapper from '../../wrappers/ScrollWrapper';
import BG_IMG_URL from '../../assets/img/foodprinted_sidedish.jpg';

const styles = theme => ({
  recipeHeaderParallax: {
    position: 'relative',
    minHeight: '560px',
    width: '100%',
    backgroundImage: `url(${BG_IMG_URL})`,
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
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, 0))',
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
  }
});

const RecipeHeader = ({
  isFavorited,
  onFavoriteClick,
  classes,
}) => {
  const onFavoriteHandle = () => {
    onFavoriteClick();
  }

  const handleScroll = (scrollDistance) => {
    const parallaxItem = document.getElementById('myHeader');
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / 2}px)`;
  };

  return (
    <div className="recipe-header">
      <ScrollWrapper onWindowScroll={handleScroll}>
        <header className={classes.recipeHeaderParallax} id="myHeader">
          <div className={classes.recipeHeaderOverlay} />
          <IconButton onClick={onFavoriteHandle} className={classes.recipeHeaderFavoriteButton}>
            <FavoriteIcon color={isFavorited ? 'action' : ''} />
          </IconButton>
          <IconButton onClick={onFavoriteHandle} className={classes.recipeHeaderShareButton}>
            <ShareIcon/>
          </IconButton>
        </header>
      </ScrollWrapper>
    </div>
  );
};

RecipeHeader.propTypes = {
  isFavorited: PropTypes.bool.isRequired,
  onFavoriteClick: PropTypes.func.isRequires,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RecipeHeader);
