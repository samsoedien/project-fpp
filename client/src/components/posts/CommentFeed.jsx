import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import CommentItem from './CommentItem';

const CommentFeed = ({ comments, postId }) => {
  return comments.map(comment => (
    <CommentItem key={comment._id} comment={comment} postId={postId} />
  ));
};

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentFeed;
