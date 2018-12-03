import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import PostItem from './PostItem';

const PostFeed = ({ posts }, props) => posts.map(post => <PostItem key={post._id} post={post} {...props} />);

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostFeed;
