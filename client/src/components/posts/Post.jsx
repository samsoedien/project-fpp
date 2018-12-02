import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import CommentFormContainer from '../../containers/CommentFormContainer';
import PostItem from './PostItem';
import CommentFeed from './CommentFeed';
import Loader from '../common/Loader';

const Post = ({ post, loading }) => {
  let postContent;
  if (post === null || loading || Object.keys(post).length === 0) {
    postContent = <Loader />;
  } else {
    postContent = (
      <div>
        <PostItem post={post} showActions={false} />
        <CommentFormContainer postId={post._id} />
        <CommentFeed postId={post._id} comments={post.comments} />
      </div>
    );
  }

  return (
    <div className="post">
      <Grid container>
        <Grid item sm={8}>
          <Link to="/feed" className="btn btn-light mb-3">
            Back To Feed
            </Link>
          {postContent}
        </Grid>
      </Grid>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Post;
