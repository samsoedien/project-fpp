import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Spinner from '../common/Spinner';

import PostForm from '../posts/PostForm';
import PostFeed from '../posts/PostFeed';

const RecipeComments = ({ posts, loading }) => {
  let postContent;
  if (posts === null || loading) {
    postContent = <Spinner />;
  } else {
    postContent = <PostFeed posts={posts} />;
  }

  return (
    <div className="recipe-comments">
      <Container>
        <Row>
          <Col md="12">
            <PostForm />
            {postContent}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

RecipeComments.propTypes = {
  posts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default RecipeComments;
