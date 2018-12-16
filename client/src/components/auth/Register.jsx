import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
} from '@material-ui/core';

import RegisterForm from './RegisterForm';

const styles = theme => ({
});

const Register = ({
  name,
  email,
  password,
  passwordConfirm,
  image,
  showPassword,
  onChangeCallback,
  onSubmitRegisterCallback,
  onShowPasswordCallback,
  errors,
  classes,
}) => {
  const onChangeHandle = e => {
    onChangeCallback(e);
  };

  const onSubmitRegisterHandle = () => {
    onSubmitRegisterCallback();
  };

  const onShowPasswordHandle = () => {
    onShowPasswordCallback();
  };

  return (
    <div className="register">
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper className={classes.registerPaper}>
            <RegisterForm
              name={name}
              email={email}
              password={password}
              passwordConfirm={passwordConfirm}
              image={image}
              showPassword={showPassword}
              onChangeHandle={onChangeHandle}
              onSubmitRegisterHandle={onSubmitRegisterHandle}
              onShowPasswordHandle={onShowPasswordHandle}
              errors={errors}
            />
          </Paper>
        </Grid>
      </Grid>
    </div >
  );
};

Register.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  showPassword: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitRegisterCallback: PropTypes.func.isRequired,
  onShowPasswordCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Register);
