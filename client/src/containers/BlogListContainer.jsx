import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogs } from '../actions/blogActions';

import BlogFormContainer from './BlogFormContainer';
import BlogList from '../components/blogs/BlogList';

class BlogListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.filterListUpdate = this.filterListUpdate.bind(this);
  }

  componentDidMount() {
    const { getBlogs } = this.props;
    getBlogs();
  }

  filterListUpdate(value) {
    console.log(value);
    this.setState({
      filterText: value,
    });
  }

  render() {
    const { blog: { blogs, loading }, auth } = this.props;
    const { filterText } = this.state;
    return (
      <div className="blogs-list-container">
        <BlogList
          blogs={blogs}
          loading={loading}
          filterText={filterText}
          filterUpdate={this.filterListUpdate}
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
