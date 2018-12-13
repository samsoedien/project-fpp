import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getBlog,
  favoriteBlog,
  deleteBlog,
  addBlogComment,
  likeBlogComment,
  flagBlogComment,
  deleteBlogComment,
} from '../actions/blogActions';

import Blog from '../components/blogs/Blog';

class BlogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      isFavorited: false,
      isLiked: false,
      isFlagged: false,
      comment: '',
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
    this.onCancelCallback = this.onCancelCallback.bind(this);
    this.onLikeCallback = this.onLikeCallback.bind(this);
    this.onFlagCallback = this.onFlagCallback.bind(this);
    this.onReplyCallback = this.onReplyCallback.bind(this);
    this.onEditCallback = this.onEditCallback.bind(this);
    this.onDeleteCallback = this.onDeleteCallback.bind(this);
    this.onDeletePostCallback = this.onDeletePostCallback.bind(this);
    this.onFavoriteCallback = this.onFavoriteCallback.bind(this);
  }

  componentDidMount() {
    const { getBlog, match } = this.props;
    getBlog(match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onLikeCallback(postId) {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }));
    const { isLiked } = this.state;
    const likeData = {
      isLiked,
    };
    const { likeBlogComment, blog: { blog } } = this.props;
    likeBlogComment(blog._id, postId, likeData);
  }

  onFlagCallback(postId) {
    this.setState(prevState => ({
      isFlagged: !prevState.isFlagged,
    }));
    const { isFlagged } = this.state;
    const flaggedData = {
      isFlagged,
    };
    const { flagBlogComment, blog: { blog } } = this.props;
    flagBlogComment(blog._id, postId, flaggedData);
  }

  onReplyCallback(user) {
    this.setState({
      comment: `@${user}`,
    });
  }

  onEditCallback(id) {
    this.setState({
      editable: true,
    });
  }

  onDeletePostCallback(id) {
    const { deleteBlogComment } = this.props;
    deleteBlogComment(id);
  }

  onDeleteCallback(id) {
    const { deleteBlog } = this.props;
    deleteBlog(id);
  }

  onFavoriteCallback(id) {
    this.setState(prevState => ({
      isFavorited: !prevState.isFavorited,
    }));
    const { isFavorited } = this.state;
    const favoriteData = {
      isFavorited,
    };
    const { favoriteBlog, blog: { blog } } = this.props;
    favoriteBlog(blog._id, favoriteData);
  }


  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCancelCallback() {
    this.setState({
      comment: '',
    });
  }

  onSubmitCallback() {
    const {
      blog: { blog },
      auth: { user },
      addBlogComment,
    } = this.props;
    const { comment } = this.state;
    const postData = {
      comment,
      name: user.name,
      avatar: user.avatar,
    };
    addBlogComment(blog._id, postData);
    this.setState({ comment: '' });
  }

  getDerivedStateFromProps() {
    const { blog: { blog } } = this.props;
    this.findUserFavorites(blog.favorites);
  }

  findUserFavorites(favorites) {
    const { auth } = this.props;
    if (favorites.filter(favorite => favorite.user === auth.user.id).length > 0) {
      return this.setState({
        isFavorited: true,
      });
    }
    return false;
  }

  findUserLikes(likes) {
    const { auth } = this.props;
    if (likes.filter(likes => likes.user === auth.user.id).length > 0) {
      return this.setState({
        isLiked: true,
      });
    }
    return false;
  }

  render() {
    const { blog: { blog, loading }, auth } = this.props;
    const {
      editable,
      isFavorited,
      isLiked,
      isFlagged,
      comment,
      errors,
    } = this.state;
    return (
      <div className="blog-container">
        <Blog
          blog={blog}
          loading={loading}
          auth={auth}
          editable={editable}
          isFavorited={isFavorited}
          isLiked={isLiked}
          isFlagged={isFlagged}
          comment={comment}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onCancelCallback={this.onCancelCallback}
          onSubmitCallback={this.onSubmitCallback}
          onLikeCallback={this.onLikeCallback}
          onFlagCallback={this.onFlagCallback}
          onReplyCallback={this.onReplyCallback}
          onEditCallback={this.onEditCallback}
          onDeleteCallback={this.onDeleteCallback}
          onDeletePostCallback={this.onDeletePostCallback}
          onFavoriteCallback={this.onFavoriteCallback}
        />
      </div>
    );
  }
}

BlogContainer.propTypes = {
  getBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  favoriteBlog: PropTypes.func.isRequired,
  addBlogComment: PropTypes.func.isRequired,
  likeBlogComment: PropTypes.func.isRequired,
  flagBlogComment: PropTypes.func.isRequired,
  deleteBlogComment: PropTypes.func.isRequired,
  blog: PropTypes.shape({
    blog: PropTypes.object,
    loading: PropTypes.bool,
  }).isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
  }).isRequired,
  match: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  blog: state.blog,
  favorites: state.favorites,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getBlog,
  favoriteBlog,
  deleteBlog,
  addBlogComment,
  likeBlogComment,
  flagBlogComment,
  deleteBlogComment,
})(BlogContainer);
