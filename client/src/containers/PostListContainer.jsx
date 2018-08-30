import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

import PostList from '../components/posts/PostList';

class PostListContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    return (
      <div className="post-list-container">
        <PostList posts={posts} loading={loading} />
      </div>
    );
  }
}

PostListContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(PostListContainer);
