import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';

import Loader from '../common/Loader';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, loading }) => {
  let blogItems;
  if (blogs === null || loading) {
    blogItems = <Loader />;
  } else if (blogs.length > 0) {
    blogItems = blogs.map(blog => (
      <BlogItem key={blog._id} blog={blog} />
    ));
  } else {
    blogItems = <h4>No Blogs found...</h4>;
  }

  return (
    <div className="blog-list">
      <Grid container justify="center">
        <Grid item>
          <Card>
            {blogItems}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.shape({
    blog: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default BlogList;
