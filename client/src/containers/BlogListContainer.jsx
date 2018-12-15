import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../actions/blogActions';

import BlogList from '../components/blogs/BlogList';

class BlogListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      limit: 2,
    };
    this.filterListUpdate = this.filterListUpdate.bind(this);
    this.onShowContentCallback = this.onShowContentCallback.bind(this)
  }

  componentDidMount() {
    const { getBlogs } = this.props;
    getBlogs();
  }

  onShowContentCallback() {
    const { limit } = this.state;
    this.setState({
      limit: limit + 4,
    });
  }

  filterListUpdate(value) {
    this.setState({
      filterText: value,
    });
  }

  render() {
    const { blog: { blogs, loading } } = this.props;
    const { filterText, limit } = this.state;
    return (
      <div className="blogs-list-container">
        <BlogList
          blogs={blogs}
          loading={loading}
          filterText={filterText}
          filterUpdate={this.filterListUpdate}
          limit={limit}
          onShowContentCallback={this.onShowContentCallback}
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
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getBlogs })(BlogListContainer);
