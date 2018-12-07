import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../actions/postActions';
import { addRecipeComment } from '../actions/recipeActions';

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
    this.onCancelCallback = this.onCancelCallback.bind(this);
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
    const { text } = this.state;
    const postData = {
      text,
      name: user.name,
      avatar: user.avatar,
    };
    switch (this.props.context) {
      case ('posts'):
        this.props.addPost(postData);
        break;
      case ('recipe'):
        this.props.addRecipeComment(this.props.content._id, postData, this.props.history);
        console.log('worksss')
        break;
      case ('blog'):
        this.props.addRecipeComment(this.props.id, postData);
        break;
      default:
        return;
    }
    this.setState({ text: '' });
  }

  onCancelCallback() {
    this.setState({
      text: '',
    });
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
          onCancelCallback={this.onCancelCallback}
        />
      </div>
    );
  }
}

PostFormContainer.propTypes = {
  context: PropTypes.string.isRequired,
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addPost, addRecipeComment })(PostFormContainer);
