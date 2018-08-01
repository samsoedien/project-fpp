import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import './Register.css';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';


class Register extends Component {
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
      history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { name, email, password, password2, errors } = this.state;


    return (
      <div className="register">
        <div className="register-container">
          <div className="row">
            <div className="col-md m-auto">
              <h2 className="register-heading-h2">Sign Up</h2>
              <p>Create your account.</p>
              <form className="register-form" onSubmit={this.onSubmit} noValidate>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.name })}
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                  />
                  {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.email })}
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                  {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <small className="form-text text-muted">
                  This site uses Gravatar.
                </small>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.password })}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                  />
                  {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.password2 })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
