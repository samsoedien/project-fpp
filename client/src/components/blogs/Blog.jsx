import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Avatar,
} from '@material-ui/core';

import BlogHeader from './BlogHeader';
import PostCommentFeed from '../posts/PostCommentFeed';
import PostForm from '../posts/PostForm';
import Loader from '../common/Loader';

const styles = theme => ({
});

const Blog = ({
  blog,
  loading,
  auth,
  text,
  isFavorited,
  onChangeCallback,
  onCancelCallback,
  onSubmitCallback,
  onLikeCallback,
  onDeleteCallback,
  onFavoriteHandleCallback,
  errors,
  classes,
}) => {

  const onChangeClick = e => {
    onChangeCallback(e);
  };

  const onCancelClick = () => {
    onCancelCallback();
  };

  const onSubmitClick = () => {
    onSubmitCallback();
  };

  const onFavoriteClick = id => {
    onFavoriteHandleCallback(id);
  };

  const onLikeClick = id => {
    onLikeCallback(id);
  };

  const onDeleteClick = id => {
    onDeleteCallback(id);
  };

  let blogContent;
  if (blog === null || loading) {
    blogContent = <Loader />;
  } else {
    blogContent = (
      <div>
        <BlogHeader
          blogImage={blog.image}
          blogFavorites={blog.favorites}
          isFavorited={isFavorited}
          onFavoriteClick={onFavoriteClick.bind(this, blog._id)}
        />
        <Container>
          <article>
            <Typography variant="h1">{blog.headline}</Typography>
            <Avatar src={blog.user.avatar} />
            <Typography>{blog.user.name}</Typography>
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
            text={text}
            errors={errors}
            onChangeClick={onChangeClick}
            onCancelClick={onCancelClick}
            onSubmitClick={onSubmitClick}
          />
        ) : null}
        <PostCommentFeed
          posts={blog.comments}
          loading={loading}
          auth={auth}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    );
  }
  return <div className="blog">{blogContent}</div>;
};

Blog.propTypes = {
  blog: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onCancelCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onLikeCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
  onFavoriteHandleCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Blog);
