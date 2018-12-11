import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../actions/blogActions';

import BlogFormContainer from './BlogFormContainer';
import BlogList from '../components/blogs/BlogList';

class BlogListContainer extends Component {
  componentDidMount() {
    const { getBlogs } = this.props;
    getBlogs();
  }

  render() {
    const { blog: { blogs, loading }, auth } = this.props;
    return (
      <div className="blogs-list-container">
        <BlogList
          blogs={blogs}
          loading={loading}
        />
        {(auth.isAuthenticated) ? <BlogFormContainer /> : null}
      </div>
    );
  }
}

BlogListContainer.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blog: PropTypes.shape({
    blogs: PropTypes.object,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
  auth: state.auth,
});

export default connect(mapStateToProps, { getBlogs })(BlogListContainer);
