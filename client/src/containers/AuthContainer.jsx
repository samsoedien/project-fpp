import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser, loginUser } from '../actions/authActions';

import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errors: {}
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitRegisterCallback = this.onSubmitRegisterCallback.bind(this);
    this.onSubmitLoginCallback = this.onSubmitLoginCallback.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (nextProps.auth.isAuthenticated) {
      history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitRegisterCallback() {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    this.props.registerUser(newUser, this.props.history);
  }

  onSubmitLoginCallback() {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

  render() {
    const { name, email, password, passwordConfirm, errors } = this.state;
    const noAccount = true;
    return (
      <div className="auth-container">
        {this.props.hasAccount ? (
          <Login
            email={email}
            password={password}
            errors={errors}
            onChangeCallback={this.onChangeCallback}
            onSubmitLoginCallback={this.onSubmitLoginCallback}
          />
        ) : (
          <Register
            name={name}
            email={email}
            password={password}
            passwordConfirm={passwordConfirm}
            errors={errors}
            onChangeCallback={this.onChangeCallback}
            onSubmitRegisterCallback={this.onSubmitRegisterCallback}
          />
        )}
      </div>
    );
  }
}

AuthContainer.defaultProps = {
  hasAccount: true
};

AuthContainer.propTypes = {
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser, loginUser }
)(withRouter(AuthContainer));

// FIXME: Integrated both Login and Register redux connection in one container. Need to verify workings with withRouter (Login component did not used withRouter).
