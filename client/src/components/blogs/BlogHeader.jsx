import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
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
  blogHeaderParallax: {
    position: 'relative',
    minHeight: '560px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    zIndex: '100',
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
  blogDeleteButton: {
    position: 'absolute',
    right: '20px',
    top: '100px',
  },
  blogEditButton: {
    position: 'absolute',
    right: '170px',
    top: '100px',
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#FAFAFA',
      color: '#9E9E9E',
    },
  },
});

const BlogHeader = ({
  blog,
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
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / 2}px)`;
  };

  return (
    <div className={classes.root}>
      <ScrollWrapper onWindowScroll={handleScroll}>
        <header className={classes.blogHeaderParallax} id="myHeader" style={{ backgroundImage: `url(/${blog.image})` }}>
          <div className={classes.blogHeaderOverlay} />
          {blog.user._id === auth.user.id ? (
            <Fragment>
              <Button variant="contained" color="secondary" className={classes.blogDeleteButton} onClick={onDelete}>Delete Blog<DeleteIcon /></Button>
              <Button variant="outlined" className={classes.blogEditButton} onClick={onEdit}>Edit Blog</Button>
            </Fragment>
          ) : null}

          <Tooltip title={`${blog.favorites.length} chef(s) loved this blog`} placement="top" TransitionComponent={Zoom}>
            <IconButton onClick={onFavoriteHandle} className={classes.blogHeaderFavoriteButton}>
              <FavoriteIcon className={isFavorited ? classes.blogHeaderIconFavorited : classes.blogHeaderIcon} />
            </IconButton>
          </Tooltip>
          <IconButton onClick={onFavorite} className={classes.blogHeaderShareButton}>
            <ShareIcon className={classes.blogHeaderIcon} />
          </IconButton>
        </header>
      </ScrollWrapper>
    </div>
  );
};

BlogHeader.propTypes = {
  blog: PropTypes.shape({
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

export default withStyles(styles)(BlogHeader);
