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
      showPassword: false,
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitRegisterCallback = this.onSubmitRegisterCallback.bind(this);
    this.onSubmitLoginCallback = this.onSubmitLoginCallback.bind(this);
    this.handleShowPasswordCallback = this.handleShowPasswordCallback.bind(this);
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitRegisterCallback() {
    const { name, email, password, passwordConfirm } = this.state;

    const newUser = {
      name,
      email,
      password,
      passwordConfirm,
    };
    this.props.registerUser(newUser, this.props.history);
  }

  onSubmitLoginCallback() {
    const { email, password } = this.state;
    const userData = {
      email,
      password,
    };
    this.props.loginUser(userData);
  }

  handleShowPasswordCallback() {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }));
  }

  render() {
    const { name, email, password, passwordConfirm, showPassword, errors } = this.state;
    return (
      <div className="auth-container">
        {this.props.hasAccount ? (
          <Login
            email={email}
            password={password}
            showPassword={showPassword}
            onChangeCallback={this.onChangeCallback}
            onSubmitLoginCallback={this.onSubmitLoginCallback}
            handleShowPasswordCallback={this.handleShowPasswordCallback}
            errors={errors}
          />
        ) : (
            <Register
              name={name}
              email={email}
              password={password}
              passwordConfirm={passwordConfirm}
              showPassword={showPassword}
              onChangeCallback={this.onChangeCallback}
              onSubmitRegisterCallback={this.onSubmitRegisterCallback}
              handleShowPasswordCallback={this.handleShowPasswordCallback}
              errors={errors}
            />
          )}
      </div>
    );
  }
}

AuthContainer.defaultProps = {
  hasAccount: true,
};

AuthContainer.propTypes = {
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser, loginUser })(withRouter(AuthContainer));
