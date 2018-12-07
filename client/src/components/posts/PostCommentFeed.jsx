import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
} from '@material-ui/core';

import PostComment from './PostComment';
import Loader from '../common/Loader';

const styles = theme => ({

});

const PostCommentFeed = ({
  posts,
  auth,
  loading,
  isLiked,
  onLikeClick,
  onDeleteClick,
}) => {
  const onLikeHandleCallback = id => {
    onLikeClick(id);
  };

  const onDeleteHandleCallback = id => {
    onDeleteClick(id);
  }

  let postContent;
  if (posts === null || loading) {
    postContent = <Loader />;
  } else {
    postContent = posts.map(post => <PostComment key={post._id} post={post} auth={auth} isLiked={isLiked} onLikeHandleClick={onLikeHandleCallback} onDeleteHandleClick={onDeleteHandleCallback} />);
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

PostCommentFeed.propTypes = {
  posts: PropTypes.object.isRequired,
  auth: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onLikeCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(PostCommentFeed);
