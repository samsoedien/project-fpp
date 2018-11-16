import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../actions/postActions';

import PostForm from '../components/posts/PostForm';

class PostFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {}
    };

    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitCallback(e) {
    const { user } = this.props.auth;
    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };
    this.props.addPost(newPost);
    this.setState({ text: '' });
  }

  render() {
    const { text, errors } = this.state;
    return (
      <div className="post-form-container">
        <PostForm
          text={text}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostFormContainer);
