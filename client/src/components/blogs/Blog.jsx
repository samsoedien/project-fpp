import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

import BlogHeader from './BlogHeader';
import ProfileCard from '../profiles/ProfileCard';
import PostFeed from '../posts/PostFeed';
import PostForm from '../posts/PostForm';
import Loader from '../common/Loader';

import IMG from '../../assets/img/profile-action-blog.jpg';
import isEmpty from '../../utils/is-empty';


const styles = theme => ({
  root: {
  },
  blogTypography: {
    position: 'relative',
    top: '-90px',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  blogArticle: {
    textAlign: 'center',
  },
  blogHeadline: {
    marginTop: '-60px',
    textTransform: 'capitalize',
  },
  blogSection: {
    textAlign: 'center',
  },
  blogIntro: {
    fontSize: '1.2rem',
  },
  subtitle: {
    margin: '12px 0',
    textTransform: 'capitalize',
  },
  img: {
    margin: '24px 0',
    height: '360px',
    width: '100%',
    backgroundImage: `url(${IMG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
});

const Blog = ({
  blog,
  loading,
  auth,
  comment,
  isFavorited,
  isLiked,
  isFlagged,
  onChangeCallback,
  onCancelCallback,
  onSubmitCallback,
  onLikeCallback,
  onFlagCallback,
  onReplyCallback,
  onEditCallback,
  onDeleteCallback,
  onFavoriteCallback,
  errors,
  classes,
}) => {
  const onChangeHandle = e => {
    onChangeCallback(e);
  };

  const onCancelHandle = () => {
    onCancelCallback();
  };

  const onSubmitHandle = () => {
    onSubmitCallback();
  };

  const onEditHandle = () => {
    onEditCallback();
  };

  const onDeleteHandle = id => {
    onDeleteCallback(id);
  };

  const onFavoriteHandle = () => {
    onFavoriteCallback();
  };

  const onLikeHandle = id => {
    onLikeCallback(id);
  };

  const onReplyHandle = user => {
    onReplyCallback(user);
  };

  const onFlagHandle = id => {
    onFlagCallback(id);
  };

  let blogContent;
  if (blog === null || loading) {
    blogContent = <Loader />;
  } else {
    blogContent = (
      <div>
        <BlogHeader
          blog={blog}
          auth={auth}
          isFavorited={isFavorited}
          onEditHandle={onEditHandle}
          onDeleteHandle={onDeleteHandle}
          onFavoriteHandle={onFavoriteHandle}
        />
        <ProfileCard user={blog.user} />

        <Grid container justify="center">
          <article className={classes.blogArticle}>
            <Typography variant="h3" className={classes.blogTypography}>{blog.headline}</Typography>
            <section className={classes.blogSection}>
              <Grid container justify="center">
                <Grid item xs={10} sm={8} lg={6}>
                  <Typography paragraph variant="body" className={classes.blogIntro}>{blog.article}</Typography>
                  <Typography variant="h4" className={classes.subtitle}>{blog.subtitle1}</Typography>
                  <Typography paragraph variant="body1">{blog.section1}</Typography>
                  <div className={classes.img} />
                  <Typography variant="h4" className={classes.subtitle}>{blog.subtitle2}</Typography>
                  <Typography paragraph variant="body1">{blog.section2}</Typography>
                  {!isEmpty(blog.url) ? <Button component={Link} to={blog.url} variant="outlined" color="primary">{blog.link}</Button> : null}

                </Grid>
              </Grid>
            </section>
          </article>
        </Grid>
        {auth.isAuthenticated ? (
          <PostForm
            comment={comment}
            errors={errors}
            onChangeHandle={onChangeHandle}
            onCancelHandle={onCancelHandle}
            onSubmitHandle={onSubmitHandle}
          />
        ) : null}
        <PostFeed
          posts={blog.posts}
          loading={loading}
          auth={auth}
          isLiked={isLiked}
          isFlagged={isFlagged}
          onLikeHandle={onLikeHandle}
          onFlagHandle={onFlagHandle}
          onReplyHandle={onReplyHandle}
          onDeleteHandle={onDeleteHandle}
        />
      </div>
    );
  }
  return <div className={classes.root}>{blogContent}</div>;
};

Blog.propTypes = {
  blog: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  auth: PropTypes.shape({}).isRequired,
  comment: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  isLiked: PropTypes.bool.isRequired,
  isFlagged: PropTypes.bool.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onCancelCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onLikeCallback: PropTypes.func.isRequired,
  onFlagCallback: PropTypes.func.isRequired,
  onReplyCallback: PropTypes.func.isRequired,
  onEditCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
  onFavoriteCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Blog);
