import React from 'react';
import PropTypes from 'prop-types';
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
    <div className="feed">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <PostForm />
            {postContent}
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeComments.propTypes = {
  posts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RecipeComments;
