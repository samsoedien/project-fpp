import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  TextField,
  Input,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff, CloudUpload as CloudUploadIcon } from '@material-ui/icons/';

const styles = theme => ({
  registerPaper: {
  },
  registerForm: {
    padding: '36px 16px',
    margin: '0 auto',
  },
  registerFormTitle: {
    padding: '6px 0',
    textAlign: 'center',
  },
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

const RegisterForm = ({
  name,
  email,
  password,
  passwordConfirm,
  image,
  showPassword,
  onChangeHandle,
  onSubmitRegisterHandle,
  onShowPasswordHandle,
  errors,
  classes,
}) => {

  const onChange = e => {
    onChangeHandle(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitRegisterHandle();
  };

  const onShowPassword = () => {
    onShowPasswordHandle();
  };
  return (
    <div className="register-form-account-details">
      <Typography className={classes.registerFormTitle} variant="h2">Signup</Typography>
      <Typography className={classes.registerFormText} variant="body1">Create your Pasthrees account</Typography>
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
                  onClick={onShowPassword}
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
        <Typography variant="caption" className={classes.registerFormSmall}>{'Forgot Password? '} </Typography>
        <Typography component={Link} to="/" variant="caption" className={classes.registerFormSmall}>Reset Password</Typography>
        <br />
        <Button
          id="image-upload"
          variant="outlined"
          color="primary"
          component="label"
          label="My Label"
          className={classes.registerFormUploadButton}
        >
          <Input type="file" name="image" value={image} onChange={onChange} className={classes.registerFormFileInput} />
          {'Upload'}
          <CloudUploadIcon className={classes.registerFormFileButton} />
        </Button>
        <Button variant="contained" color="primary" type="submit" value="Submit" className={classes.registerFormButton}>Signup</Button>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  showPassword: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  onSubmitRegisterHandle: PropTypes.func.isRequired,
  onShowPasswordHandle: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RegisterForm);