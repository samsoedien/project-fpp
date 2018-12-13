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
      image: '',
      showPassword: false,
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitRegisterCallback = this.onSubmitRegisterCallback.bind(this);
    this.onSubmitLoginCallback = this.onSubmitLoginCallback.bind(this);
    this.onShowPasswordCallback = this.onShowPasswordCallback.bind(this);
  }

  componentDidMount() {
    const { auth: { isAuthenticated }, history } = this.props;
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      const { history } = this.props;
      history.push('/dashboard');
    }
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

  onSubmitRegisterCallback() {
    const {
      name,
      email,
      password,
      passwordConfirm,
      image,
    } = this.state;
    // const newUser = {
    //   name,
    //   email,
    //   password,
    //   passwordConfirm,
    // };

    const newUser = new FormData();
    newUser.append('name', name);
    newUser.append('email', email);
    newUser.append('password', password);
    newUser.append('passwordConfirm', passwordConfirm);
    newUser.append('image', image);

    const { registerUser, history } = this.props;
    registerUser(newUser, history);
  }

  onSubmitLoginCallback() {
    const { email, password } = this.state;
    const userData = {
      email,
      password,
    };
    const { loginUser } = this.props;
    loginUser(userData);
  }

  onShowPasswordCallback() {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }));
  }

  render() {
    const { hasAccount } = this.props;
    const {
      name,
      email,
      password,
      passwordConfirm,
      image,
      showPassword,
      errors,
    } = this.state;
    return (
      <div className="auth-container">
        {hasAccount ? (
          <Login
            email={email}
            password={password}
            showPassword={showPassword}
            image={image}
            onChangeCallback={this.onChangeCallback}
            onSubmitLoginCallback={this.onSubmitLoginCallback}
            onShowPasswordCallback={this.onShowPasswordCallback}
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
              onShowPasswordCallback={this.onShowPasswordCallback}
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
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  hasAccount: PropTypes.bool,
  history: PropTypes.object.isRequired, // eslint-disable-line
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirm: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser, loginUser })(withRouter(AuthContainer));
