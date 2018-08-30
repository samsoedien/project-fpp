import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../actions/postActions';

import Post from '../components/posts/Post';

class PostContainer extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    return (
      <div className="post-container">
        <Post post={post} loading={loading} />
      </div>
    );
  }
}

PostContainer.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(PostContainer);
