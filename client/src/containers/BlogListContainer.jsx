import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../actions/blogActions';

import BlogList from '../components/blogs/BlogList';

class BlogListContainer extends Component {
  componentDidMount() {
    const { getBlogs } = this.props;
    getBlogs();
  }

  render() {
    const { blogs, loading } = this.props.blog;
    return (
      <div className="blogs-list-container">
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
    blogs: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  blogs: state.blogs,
});

export default connect(mapStateToProps, { getBlogs })(BlogListContainer);
