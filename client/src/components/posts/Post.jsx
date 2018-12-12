import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Avatar,
  IconButton,
  Tooltip,
  Zoom,
} from '@material-ui/core';
import { ThumbUp as ThumbUpIcon, Flag as FlagIcon } from '@material-ui/icons';

const styles = theme => ({
  postAvatar: {
    width: '80px',
    height: '80px',
  },
  postThumbIconLiked: { color: theme.palette.primary.main },
  postThumbIconUnliked: { color: 'grey' },
  flagIconFlagged: { color: theme.palette.secondary.main },
  flagIconUnFlagged: { color: 'grey' },
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
    <div className="post-comment">
      <Container>
        <Row>
          <Col md="2">
            <Avatar src={post.avatar} className={classes.postAvatar} component={Link} to="/" />
            <Typography>{post.name}</Typography>
          </Col>
          <Col md="10">
            {(isFlagged) ? <Typography variant="caption">This comment has been flagged by a user</Typography> : <Typography variant="paragraph">{post.comment}</Typography>}
            {showActions ? (
              <Fragment>
                <IconButton onClick={onLike}>
                  <Typography>{post.likes.length}</Typography>
                  <ThumbUpIcon className={isLiked ? classes.postThumbIconLiked : classes.postThumbIconUnliked} />
                </IconButton>
                <Tooltip title="flag comment as inappropriate" placement="top" TransitionComponent={Zoom}>
                  <IconButton onClick={onFlag}>
                    <FlagIcon className={isFlagged ? classes.flagIconFlagged : classes.flagIconUnflagged} />
                  </IconButton>
                </Tooltip>
                {auth.isAuthenticated ? <Button variant="outline" color="primary" onClick={onReply}>Reply</Button> : null}
                {post.user === auth.user.id
                  ? (<Button variant="contained" color="secondary" onClick={onDelete}>Delete Comment</Button>)
                  : null}
              </Fragment>
            ) : null}
          </Col>
        </Row>
      </Container>
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
