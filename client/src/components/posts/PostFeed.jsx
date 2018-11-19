import React from 'react';
import PropTypes from 'prop-types';

import PostItem from './PostItemtemp';

const PostFeed = ({ posts }, props) => posts.map(post => <PostItem key={post._id} post={post} {...props} />);

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostFeed;
