import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBlog } from '../actions/blogActions';

import BlogForm from '../components/blogs/BlogForm';

class BlogFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      article: '',
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeCallback(e) {
    switch (e.target.name) {
      case 'image':
        this.setState({ image: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmitCallback() {
    const { headline, article } = this.state;
    const blogData = {
      headline,
      article,
    };
    const { createBlog, history } = this.props;
    createBlog(blogData, history);
  }

  render() {
    const {
      headline,
      article,
      image,
      errors,
    } = this.state;
    return (
      <div className="blog-form-container">
        <BlogForm
          headline={headline}
          article={article}
          image={image}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

BlogFormContainer.propTypes = {
  createBlog: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    headline: PropTypes.string,
    article: PropTypes.string,
  }).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createBlog })(withRouter(BlogFormContainer));
