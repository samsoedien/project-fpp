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
    const { blog: { blogs, loading } } = this.props;
    return (
      <div className="blogs-list-container">
        <BlogFormContainer />
        <BlogList
          blogs={blogs}
          loading={loading}
        />
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
};

const mapStateToProps = state => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getBlogs })(BlogListContainer);
