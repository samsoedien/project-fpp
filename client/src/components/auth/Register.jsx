import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons/';

import Stepper from '../layout/Stepper';
import Pricing from '../layout/Pricing';

const styles = theme => ({
  registerPaper: {
    margin: '0 auto',
  },
  registerForm: {
    padding: '36px 16px',
    margin: '0 auto',
  },
  registerFormTitle: { padding: '6px 0' },
  registerFormText: {
    padding: '12px 0',
    textAlign: 'center',
  },
  registerFormSmall: {
    marginBottom: '6px',
    float: 'right',
  },
  registerFormInput: {
    marginBottom: '24px',
    width: '100%',
  },
  registerFormButton: {
    float: 'right',
  },
});

const Register = ({
  name,
  email,
  password,
  passwordConfirm,
  showPassword,
  onChangeCallback,
  onSubmitRegisterCallback,
  handleShowPasswordCallback,
  errors,
  classes,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitRegisterCallback();
  };

  const handleShowPassword = () => {
    handleShowPasswordCallback();
  };

  return (
    <div className="register">
      <Container>
        <Row>
          <Col md="10">
            <Paper className={classes.registerPaper}>
              <Stepper />
            </Paper>
          </Col>
        </Row>

        <Row>
          <Col xs="8" md="6" lg="4">
            <Typography className={classes.registerFormTitle} variant="h3">Signup</Typography>
            <Typography className={classes.registerFormText} variant="body1">Create your FPP account</Typography>
            <form onSubmit={onSubmit} className={classes.registerForm} noValidate autoComplete="off">
              <TextField
                id="mui-theme-provider-outlined-input"
                className={classes.registerFormInput}
                variant="outlined"
                label="Name"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                error={errors.name}
                helperText={errors ? errors.name : ''}
              />

              <TextField
                id="mui-theme-provider-outlined-input"
                className={classes.registerFormInput}
                variant="outlined"
                label="Email Address"
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                error={errors.email}
                helperText={errors ? errors.email : ''}
              />

              <TextField
                id="mui-theme-provider-outlined-input"
                className={classes.registerFormInput}
                variant="outlined"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={onChange}
                error={errors.password}
                helperText={errors ? errors.password : ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                id="mui-theme-provider-outlined-input"
                // className="form__input"
                className={classes.registerFormInput}
                variant="outlined"
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={onChange}
                error={errors.passwordConfirm}
                helperText={errors ? errors.passwordConfirm : ''}
              />
              <small className={classes.registerFormSmall}>
                {'Forgot Password? '}
                <Link to="/">Reset Password</Link>
              </small>
              <br />
              <Button type="submit" value="Submit" className={classes.registerFormButton}>Signup</Button>
            </form>
          </Col>
        </Row>
      </Container>
      <Pricing />
    </div>
  );
};

Register.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  showPassword: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitRegisterCallback: PropTypes.func.isRequired,
  handleShowPasswordCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Register);
