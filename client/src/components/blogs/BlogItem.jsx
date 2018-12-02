import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
} from '@material-ui/core';

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
      <Paper>
        hi
      </Paper>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape().isRequired,
};

export default BlogItem;

// TODO: Design blogs.
