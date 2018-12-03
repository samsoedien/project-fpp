import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import Loader from '../common/Loader';
import PostFeed from './PostFeed';

const PostList = ({ posts, loading }) => {
  let postContent;
  if (posts === null || loading) {
    postContent = <Loader />;
  } else {
    postContent = <PostFeed posts={posts} />;
  }

  return (
    <div className="feed">
      <Container>
        <Row>
          <Col md="12">{postContent}</Col>
        </Row>
      </Container>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default PostList;
