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
      password2: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      history.push('/dashboard')
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

  onSubmitCallback() {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  }

  onSubmitLoginCallback() {
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  }

  render() {
    const { name, email, password, password2, errors } = this.state;
    const noAccount = true;
    return (
      <div className="auth-container">
        {noAccount ? (
          <Register
            name={name}
            email={email}
            password={password}
            password2={password2}
            errors={errors}
            onChangeCallback={this.onChangeCallback}
            onSubmitCallback={this.onSubmitCallback}
          />
        ) : (
          <Login
            email={email}
            password={password}
            errors={errors}
            onChangeCallback={this.onChangeCallback}
            onSubmitCallback={this.onSubmitCallback}
          />
        )}
      </div>
    );
  }
}

AuthContainer.defaultProps = {
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

// FIXME: Integrated both Login and Register redux connection in one container. Need to verify workings with withRouter (Login component did not used withRouter).