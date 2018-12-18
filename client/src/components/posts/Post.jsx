import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
  Avatar,
  IconButton,
  Tooltip,
  Zoom,
  Divider,
} from '@material-ui/core';
import { ThumbUp as ThumbUpIcon, Flag as FlagIcon } from '@material-ui/icons';

import IMG from '../../assets/img/printed-geometry.jpg';

const styles = theme => ({
  root: {
    margin: '12px 0',
  },
  postThumbIconLiked: { color: theme.palette.primary.main },
  postThumbIconUnliked: { color: 'grey' },
  flagIconFlagged: { color: theme.palette.secondary.main },
  flagIconUnFlagged: { color: 'grey' },
  postCompany: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  postAvatar: {
    margin: '0 auto',
    width: 70,
    height: 70,
  },
  postName: {
    textAlign: 'center',
    marginTop: '2px 0',
  },
  postProfession: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    marginLeft: '12px',
  },
  comment: {
    padding: '24px 0',
  },
});

const Post = ({
  post,
  auth,
  isLiked,
  isFlagged,
  showActions,
  onLikeHandleClick,
  onFlagHandleClick,
  onReplyHandleClick,
  onDeleteHandleClick,
  classes,
}) => {
  const onLike = id => {
    onLikeHandleClick(post._id);
  };

  const onFlag = () => {
    onFlagHandleClick(post._id);
  };

  const onReply = () => {
    onReplyHandleClick(post.name);
  };

  const onDelete = id => {
    onDeleteHandleClick(post._id);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item xs={3}>
          <Grid container direction="column" justify="center">
            <Link to={`/profile/${post.name}`}>
              {/* <Avatar src={`/${post.user.image}`} className={classes.postAvatar} /> */}
              <Avatar src={IMG} className={classes.postAvatar} />
            </Link>
            <Typography component={Link} to={`/profiles/${post.name}`} color="primary" className={classes.postName}>{post.name}</Typography>
            <Typography variant="caption" className={classes.postProfession}>Pastry Chef</Typography>
          </Grid>
        </Grid>

        <Grid item xs={9}>
          <Grid container justify="center">
            <Grid item xs={12} className={classes.comment}>
              {(isFlagged) ? <Typography variant="caption">This comment has been flagged by a user</Typography> : <Typography variant="body1">{post.comment}</Typography>}
            </Grid>
            <Grid item xs={12}>
              {showActions ? (
                <Fragment>
                  <Tooltip title={`${post.likes.length} chef(s) liked this comment`} placement="top" TransitionComponent={Zoom}>
                    <IconButton onClick={onLike}>
                      <ThumbUpIcon
                        className={isLiked ? classes.postThumbIconLiked : classes.postThumbIconUnliked}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="flag comment as inappropriate" placement="top" TransitionComponent={Zoom}>
                    <IconButton onClick={onFlag}>
                      <FlagIcon
                        className={isFlagged ? classes.flagIconFlagged : classes.flagIconUnflagged}
                      />
                    </IconButton>
                  </Tooltip>
                  {auth.isAuthenticated ? <Button variant="outlined" color="primary" onClick={onReply} className={classes.button}>Reply</Button> : null}
                  {post.user === auth.user.id
                    ? (<Button variant="contained" color="secondary" onClick={onDelete} className={classes.button}>Delete Comment</Button>)
                    : null}
                </Fragment>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="middle" />

      {/* <Grid container justify="center">
        <Grid item md={2}>
          <Avatar src={post.image} className={classes.postAvatar} component={Link} to="/" />
          <Typography>{post.name}</Typography>
        </Grid>
        <Grid item md={10}>
          {(isFlagged) ? <Typography variant="caption">This comment has been flagged by a user</Typography> : <Typography variant="paragraph">{post.comment}</Typography>}
          {showActions ? (
            <Fragment>
              <IconButton onClick={onLike}>
                <Typography>{post.likes.length}</Typography>
                <ThumbUpIcon
                  className={isLiked ? classes.postThumbIconLiked : classes.postThumbIconUnliked}
                />
              </IconButton>
              <Tooltip title="flag comment as inappropriate" placement="top" TransitionComponent={Zoom}>
                <IconButton onClick={onFlag}>
                  <FlagIcon
                    className={isFlagged ? classes.flagIconFlagged : classes.flagIconUnflagged}
                  />
                </IconButton>
              </Tooltip>
              {auth.isAuthenticated ? <Button variant="outline" color="primary" onClick={onReply}>Reply</Button> : null}
              {post.user === auth.user.id
                ? (<Button variant="contained" color="secondary" onClick={onDelete}>Delete Comment</Button>)
                : null}
            </Fragment>
          ) : null}
        </Grid>
      </Grid> */}
    </div>
  );
};

Post.defaultProps = {
  showActions: true,
  isLiked: false,
  isFlagged: false,
};

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.object,
    comment: PropTypes.string,
    likes: PropTypes.array,
  }).isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  isLiked: PropTypes.bool,
  isFlagged: PropTypes.bool,
  showActions: PropTypes.bool,
  onLikeHandleClick: PropTypes.func.isRequired,
  onFlagHandleClick: PropTypes.func.isRequired,
  onReplyHandleClick: PropTypes.func.isRequired,
  onDeleteHandleClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Post);
