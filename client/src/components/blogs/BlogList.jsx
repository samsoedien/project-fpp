import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import Loader from '../common/Loader';
import BlogItem from './BlogItem';

const styles = theme => ({
});

const BlogList = ({ blogs, loading, classes }) => {
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
      <Grid container justify="center" spacing={16}>
        <Paper className={classes.blogListPaper}>
          {blogItems}
        </Paper>
      </Grid>
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.shape({
    blog: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(BlogList);
