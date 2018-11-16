import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

import PostFormContainer from './PostForm';
import PostFeed from './PostFeed';

const PostList = ({ posts, loading }) => {
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
          <div className="col-md-12">{postContent}</div>
        </div>
      </div>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default PostList;
