import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Spinner from '../common/Spinner';
import PostItem from './PostItem';
import CommentFormContainer from '../../containers/CommentFormContainer';
import CommentFeed from './CommentFeed';

const Post = ({ post, loading }) => {
  let postContent;
  if (post === null || loading || Object.keys(post).length === 0) {
    postContent = <Spinner />;
  } else {
    postContent = (
      <div>
        <PostItem post={post} showActions={false} />
        <CommentFormContainer postId={post._id} />
        <CommentFeed postId={post._id} comments={post.comments} />
      </div>
    );
  }

  return (
    <div className="post">
      <Container>
        <Row>
          <Col md="12">
            <Link to="/feed" className="btn btn-light mb-3">
              Back To Feed
            </Link>
            {postContent}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Post;
