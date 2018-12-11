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
  blogHeaderParallax: {
    position: 'relative',
    minHeight: '560px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  blogHeaderOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .35), rgba(0, 0, 0, 0), rgba(0, 0, 0, .35))',
  },
  blogHeaderFavoriteButton: {
    position: 'absolute',
    right: '24px',
    bottom: '24px',
  },
  blogHeaderShareButton: {
    position: 'absolute',
    right: '96px',
    bottom: '24px',
  },
  blogHeaderIcon: {
    color: theme.palette.common.white,
  },
  blogHeaderIconFavorited: {
    color: theme.palette.primary.main,
  },
});

const BlogHeader = ({
  blogImage,
  blogFavorites,
  isFavorited,
  onFavoriteClick,
  classes,
}) => {

  console.log(isFavorited);
  const onFavoriteHandle = () => {
    onFavoriteClick();
  };

  const handleScroll = scrollDistance => {
    const parallaxItem = document.getElementById('myHeader');
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / 2}px)`;
  };

  return (
    <div className="blog-header">
      <ScrollWrapper onWindowScroll={handleScroll}>
        <header className={classes.blogHeaderParallax} id="myHeader" style={{ backgroundImage: `url(${blogImage})` }}>
          <div className={classes.blogHeaderOverlay} />
          <Tooltip title={`${blogFavorites.length} chef(s) loved this blog`} placement="top" TransitionComponent={Zoom}>
            <IconButton onClick={onFavoriteHandle} className={classes.blogHeaderFavoriteButton}>
              <FavoriteIcon className={isFavorited ? classes.blogHeaderIconFavorited : classes.blogHeaderIcon} />
            </IconButton>
          </Tooltip>
          <IconButton onClick={onFavoriteHandle} className={classes.blogHeaderShareButton}>
            <ShareIcon className={classes.blogHeaderIcon} />
          </IconButton>
        </header>
      </ScrollWrapper>
    </div>
  );
};

BlogHeader.propTypes = {
  blogFavorites: PropTypes.array.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(BlogHeader);
