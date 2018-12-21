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
      subtitle1: '',
      subtitle2: '',
      section1: '',
      section2: '',
      link: '',
      url: '',
      image: '',
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
    const {
      headline,
      article,
      subtitle1,
      subtitle2,
      section1,
      section2,
      link,
      url,
      image,
    } = this.state;

    const blogData = new FormData();
    blogData.append('headline', headline);
    blogData.append('article', article);
    blogData.append('subtitle1', subtitle1);
    blogData.append('subtitle2', subtitle2);
    blogData.append('section1', section1);
    blogData.append('section2', section2);
    blogData.append('link', link);
    blogData.append('url', url);
    blogData.append('image', image);

    const { createBlog, history } = this.props;
    createBlog(blogData, history);
  }

  render() {
    const {
      headline,
      article,
      subtitle1,
      subtitle2,
      section1,
      section2,
      link,
      url,
      image,
      errors,
    } = this.state;
    return (
      <div className="blog-form-container">
        <BlogForm
          headline={headline}
          article={article}
          subtitle1={subtitle1}
          subtitle2={subtitle2}
          section1={section1}
          section2={section2}
          link={link}
          url={url}
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
