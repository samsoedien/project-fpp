import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardText,
} from 'reactstrap';

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
      <Card>
        <CardTitle>This is a blog post</CardTitle>
        <CardText>This is text about the blog...</CardText>
      </Card>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape().isRequired,
};

export default BlogItem;

// TODO: Design blogs.
