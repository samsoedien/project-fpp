import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';

const Register = ({
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
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">
              Create your DevConnector account
            </p>
            <form noValidate onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={onChange}
                error={errors.name}
              />
              <TextFieldGroup
                placeholder="Email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={onChange}
                error={errors.email}
                info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
              />
              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={onChange}
                error={errors.password}
              />
              <TextFieldGroup
                placeholder="Confirm Password"
                name="password2"
                type="password"
                value={this.state.password2}
                onChange={onChange}
                error={errors.password2}
              />
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Register;
