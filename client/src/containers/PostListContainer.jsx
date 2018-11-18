import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getPosts,
  deletePost,
  addLike,
  removeLike
} from '../actions/postActions';

import PostFormContainer from './PostFormContainer';
import PostList from '../components/posts/PostList';

class PostListContainer extends Component {
  constructor(props) {
    super(props);
    this.onDeleteCallback = this.onDeleteCallback.bind(this);
    this.onLikeCallback = this.onLikeCallback.bind(this);
    this.onUnlikeCallback = this.onUnlikeCallback.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  onDeleteCallback(id) {
    this.props.deletePost(id);
  }

  onLikeCallback(id) {
    this.props.addLike(id);
  }

  onUnlikeCallback(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { posts, loading, auth } = this.props.post;
    return (
      <div className="post-list-container">
        <PostFormContainer />
        <PostList
          posts={posts}
          auth={auth}
          loading={loading}
          onDeleteCallback={this.onDeleteCallback}
          onLikeCallback={this.onlikeCallback}
          onUnlikeCallback={this.onUnlikeCallback}
        />
      </div>
    );
  }
}

PostListContainer.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPosts, deletePost, addLike, removeLike }
)(PostListContainer);

//TODO:  deletePost, addLike, removeLike are not working in this file yet. Callbacks need to called in postlist => postfeed => postitem
