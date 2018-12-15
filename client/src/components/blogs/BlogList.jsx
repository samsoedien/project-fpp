import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import BlogItem from './BlogItem';
import Loader from '../common/Loader';
import SearchBarComponent from '../common/SearchBarComponent';

import BANNER_IMG from '../../assets/img/foodprinted_sidedish.jpg';

const styles = theme => ({
  paper: {
    border: 'red solid 1px',
    width: '200px',
    height: '600px',
  }
});

const BlogList = ({
  blogs,
  loading,
  filterText,
  filterUpdate,
  classes,
}) => {
  const filterCallback = val => {
    filterUpdate(val);
  };

  let blogItems;
  if (blogs === null || loading) {
    blogItems = <Loader />;
  } else if (blogs.length > 0) {
    blogItems = blogs
      .filter(blog => {
        return (
          blog.headline.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        );
      })
      .map(blog => (
        <BlogItem key={blog._id} blog={blog} />
      ));
  } else {
    blogItems = <h4>No Blogs found...</h4>;
  }

  return (
    <div className="blog-list">
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="h3" className={classes.recipeListTitle}>Community Blogs</Typography>
          <Typography paragraph variant="body1" className={classes.recipeListParagraph}>All culinary stories written by the community. Explore wonderful cooking tips, business advice and more!</Typography>
        </Grid>
      </Grid>

      <SearchBarComponent
        bannerImage={BANNER_IMG}
        searchLabel="Search Blogs"
        filterText={filterText}
        filterUpdate={filterUpdate}
        filterCallback={filterCallback}
      />

      <Grid container justify="center" spacing={24}>
        {blogItems}
      </Grid>
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.shape({
    blog: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  filterUpdate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(BlogList);
