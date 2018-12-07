import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getPosts,
  deletePost,
  likePost,
} from '../actions/postActions';
import {
  getRecipeComments
} from '../actions/recipeActions';

import PostFormContainer from './PostFormContainer';
import PostList from '../components/posts/PostList';

class PostListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
    this.onLikeCallback = this.onLikeCallback.bind(this);
    this.onDeleteCallback = this.onDeleteCallback.bind(this);
  }

  componentDidMount() {
    if (this.props.context === 'posts') this.props.getPosts();
  }

  onDeleteCallback(id) {
    this.props.deletePost(id);
  }

  onLikeCallback(id) {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }));
    const { isLiked } = this.state;
    const likeData = {
      isLiked,
    };
    this.props.likePost(id, likeData, this.props.history);
    console.log(isLiked);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return this.setState({
        isLiked: true,
      });
    }
    return false;
  }

  render() {
    const { posts, loading } = this.props.post;
    const { auth, context, content, id } = this.props;
    const { isLiked } = this.state;
    console.log(this.props.recipe);
    return (
      <div className="post-list-container">
        {/* <PostList
          posts={(context === 'posts') ? posts : content}
          auth={auth}
          loading={loading}
          isLiked={isLiked}
          onLikeCallback={this.onLikeCallback}
          onDeleteCallback={this.onDeleteCallback}
        /> */}
        {auth.isAuthenticated ? <PostFormContainer context={context} id={id} /> : null}
      </div>
    );
  }
}

PostListContainer.defaultProps = {
  context: 'posts',
};

PostListContainer.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired,
  context: PropTypes.string,
  content: PropTypes.object,
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts, deletePost, likePost })(PostListContainer);
