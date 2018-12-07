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
});

const PostComment = ({
  post,
  auth,
  isLiked,
  showActions,
  onLikeHandleClick,
  onDeleteHandleClick,
  classes,
}) => {

  const onLikeClick = id => {
    onLikeHandleClick(id);
  };

  const onDeleteClick = id => {
    onDeleteHandleClick(id);
  };

  return (
    <div className="post-comment">
      <Container>
        <Row>
          <Col md="2">
            <Avatar src={post.avatar} className={classes.postAvatar} component={Link} to="/" />
            <p className="text-center">{post.name}</p>
          </Col>
          <Col md="10">
            <p className="lead">{post.text}</p>
            {showActions ? (
              <Fragment>
                <IconButton onClick={onLikeClick.bind(this, post._id)}>
                  <ThumbUpIcon className={isLiked ? classes.postThumbIconLiked : classes.postThumbIconUnliked} />
                  <span>{post.likes.length}</span>
                </IconButton>
                <Tooltip title="flag comment as inappropriate" placement="top" TransitionComponent={Zoom}>
                  <IconButton>
                    <FlagIcon />
                  </IconButton>
                </Tooltip>
                <Button component={Link} to={`/post/${post._id}`}>Comments</Button>
                {post.user === auth.user.id ? (
                  <Button onClick={onDeleteClick.bind(this, post._id)}>
                    <i className="fas fa-times" />
                  </Button>
                ) : null}
              </Fragment>
            ) : null}
          </Col>
        </Row>
      </Container>

    </div >
  );
};

PostComment.defaultProps = {
  showActions: true,
  isLiked: false,
};

PostComment.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object,
  isLiked: PropTypes.bool,
  showActions: PropTypes.bool,
  onLikeHandleCallback: PropTypes.func.isRequired,
  onDeleteHandleCallback: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(PostComment);
