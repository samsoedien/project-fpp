import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import PostForm from '../posts/PostForm';
import PostFeed from '../posts/PostFeed';
import Loader from '../common/Loader';

const RecipeComments = ({ posts, loading }) => {
  let postContent;
  if (posts === null || loading) {
    postContent = <Loader />;
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
  posts: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RecipeComments;
