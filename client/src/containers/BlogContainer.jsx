import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlog } from '../actions/blogActions';

import Blog from '../components/blogs/Blog';

class BlogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourited: false,
    };
  }

  componentDidMount() {
    this.props.getBlog(this.props.match.params.id);
  }

  render() {
    const { blog, loading } = this.props.blog;
    const { isFavourited } = this.state;
    return (
      <div className="blog-container">
        <Blog blog={blog} loading={loading} isFavourited={isFavourited} />
      </div>
    )
  }
}

BlogContainer.propTypes = {
  getBlog: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getBlog })(BlogContainer);
