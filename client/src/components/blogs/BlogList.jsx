import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';

import BlogItem from './BlogItem';
import Loader from '../common/Loader';
// import SearchBarComponent from '../common/SearchBarComponent';
import ProfileAction from '../profiles/ProfileAction';

// import BANNER_IMG from '../../assets/img/foodprinted_sidedish.jpg';
import ACTION_IMG from '../../assets/img/profile-action-blog.jpg';


const styles = theme => ({
  root: {},
  blogListTitle: {
    margin: '16px 0',
    textAlign: 'center',
  },
  blogListParagraph: {
    margin: '24px 0',
    textAlign: 'center',
  },
  blogListButton: {
    margin: '24px 0',
  },
});

const BlogList = ({
  blogs,
  loading,
  filterText,
  filterUpdate,
  limit,
  onShowContentCallback,
  classes,
}) => {
  // const filterCallback = val => {
  //   filterUpdate(val);
  // };

  const onShowContent = () => {
    onShowContentCallback();
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
      .slice(0, limit)
      .map(blog => (
        <BlogItem key={blog._id} blog={blog} />
      ));
  } else {
    blogItems = <Typography variant="h4">No Blogs found...</Typography>;
  }

  return (
    <div className="blog-list">
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="h3" className={classes.blogListTitle}>Community Blogs</Typography>
          <Typography paragraph variant="body1" className={classes.blogListParagraph}>All culinary stories written by the community. Explore wonderful cooking tips, business advice and more!</Typography>
        </Grid>
      </Grid>

      {/* <SearchBarComponent
        bannerImage={BANNER_IMG}
        searchLabel="Search Blogs"
        filterText={filterText}
        filterUpdate={filterUpdate}
        filterCallback={filterCallback}
      /> */}

      <Grid container justify="center" spacing={24}>
        {blogItems}
      </Grid>
      <Grid container justify="center">
        <Button onClick={onShowContent} variant="contained" color="primary" className={classes.blogListButton}>Show more</Button>
      </Grid>
      <Divider variant="middle" />

      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Typography paragraph variant="body1" className={classes.blogListParagraph}>Have you recently tried out a Pasthree and created a beautiful tasty dish? Share your story with the community by writing how you created your recipe and where everyone can try it out!</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <ProfileAction url="/create-blog" buttonLabel="Write a Blog" actionImage={ACTION_IMG} />
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
  limit: PropTypes.number.isRequired,
  onShowContentCallback: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(BlogList);
