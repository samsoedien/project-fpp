import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
} from '@material-ui/core';

import PostItem from './PostItem';
import Loader from '../common/Loader';

const styles = theme => ({

});

const PostList = ({
  posts,
  auth,
  loading,
  isLiked,
  onLikeCallback,
  onDeleteCallback,
}) => {
  const onLikeHandleCallback = id => {
    onLikeCallback(id);
  };

  const onDeleteHandleCallback = id => {
    onDeleteCallback(id);
  }

  let postContent;
  if (posts === null || loading) {
    postContent = <Loader />;
  } else {
    postContent = posts.map(post => <PostItem key={post._id} post={post} auth={auth} isLiked={isLiked} onLikeHandleCallback={onLikeHandleCallback} onDeleteHandleCallback={onDeleteHandleCallback} />);
  }

  return (
    <div className="post-list-feed">
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

PostList.propTypes = {
  posts: PropTypes.object.isRequired,
  auth: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onLikeCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default withStyles(styles)(PostList);
