import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  Button,
} from '@material-ui/core';

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
      <Card>
        {blog.user.name}
        <Typography variant="headline">{blog.heading}</Typography>
        <Typography variant="paragraph">{blog.article}</Typography>
        <Button component={Link} to={`/blogs/${blog._id}`}>Read Blog</Button>
      </Card>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    heading: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogItem;

// TODO: Design blogs.
