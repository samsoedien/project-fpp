import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
} from '@material-ui/core';

import Post from './Post';
import Loader from '../common/Loader';

const styles = theme => ({

});

const PostFeed = ({
  posts,
  auth,
  loading,
  isLiked,
  isFlagged,
  onLikeHandle,
  onFlagHandle,
  onReplyHandle,
  onDeleteHandle,
}) => {
  const onLikeHandleCallback = id => {
    onLikeHandle(id);
  };

  const onFlagHandleClick = id => {
    onFlagHandle(id);
  };

  const onReplyHandleClick = user => {
    onReplyHandle(user);
  };

  const onDeleteHandleCallback = id => {
    onDeleteHandle(id);
  };

  let postContent;
  if (posts === null || loading) {
    postContent = <Loader />;
  } else {
    postContent = posts.map(post => (
      <Post
        key={post._id}
        post={post}
        auth={auth}
        isLiked={isLiked}
        isFlagged={isFlagged}
        onLikeHandleClick={onLikeHandleCallback}
        onFlagHandleClick={onFlagHandleClick}
        onReplyHandleClick={onReplyHandleClick}
        onDeleteHandleClick={onDeleteHandleCallback}
      />));
  }

  return (
    <div className="post-comment-feed">
      <Container>
        <Row>
          <Col md="12">
            <Paper>
              {postContent}
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

PostFeed.propTypes = {
  posts: PropTypes.shape({
    _id: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  auth: PropTypes.shape({}).isRequired,
  isLiked: PropTypes.bool.isRequired,
  isFlagged: PropTypes.bool.isRequired,
  onLikeHandle: PropTypes.func.isRequired,
  onFlagHandle: PropTypes.func.isRequired,
  onReplyHandle: PropTypes.func.isRequired,
  onDeleteHandle: PropTypes.func.isRequired,
};

export default withStyles(styles)(PostFeed);
