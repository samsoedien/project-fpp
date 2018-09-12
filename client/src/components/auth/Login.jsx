import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';

const Login = ({
  errors,
  onChangeCallback,
  onSubmitCallback,
}) => {
  const onChange = (e) => {
    onChangeCallback(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback();
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">
              Sign in to your account
            </p>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="Email Address"
                name="email"
                type="email"
                value={this.state.email}
                onChange={onChange}
                error={errors.email}
              />

              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={onChange}
                error={errors.password}
              />
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Login;
