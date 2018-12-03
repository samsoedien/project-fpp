import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
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
