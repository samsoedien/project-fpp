import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Avatar,
} from '@material-ui/core';

import BlogHeader from './BlogHeader';
import ProfileCard from '../profiles/ProfileCard';
import PostFeed from '../posts/PostFeed';
import PostForm from '../posts/PostForm';
import Loader from '../common/Loader';

const styles = theme => ({
  root: {
  },
  blogArticle: {
    textAlign: 'center',
  },
  blogHeadline: {
    marginTop: '-80px',
    textTransform: 'capitalize',
  },
  blogSection: {
    textAlign: 'center',
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
        <Container>
          <article className={classes.blogArticle}>
            <Typography variant="h2" className={classes.blogHeadline}>{blog.headline}</Typography>
            <section className={classes.blogSection}>
              <Container>
                <Row>
                  <Col lg="8" md="9" sm="10" xs="11" className="m-auto">
                    <Typography>{blog.article}</Typography>
                  </Col>
                </Row>
              </Container>
            </section>
          </article>
        </Container>
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
