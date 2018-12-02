import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  Dialog,
  Button,
  FormHelperText,
  TextField,
  Select,
  FormControl,
  OutlinedInput,
  Input,
  InputLabel,
  InputAdornment,
  MenuItem,
  IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons/';

import IMG_URL from '../../assets/img/foodprinted_sidedish.jpg';

const styles = theme => ({
  panelBackground: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundImage: `url(${IMG_URL})`,
    backgroundSize: 'cover',
  },
  loginForm: {
    padding: '36px 16px',
  },
  loginFormTitle: { padding: '6px 0' },
  formText: {
    padding: '12px 0',
    textAlign: 'center',
  },
  loginFormSmall: {
    marginBottom: '6px',
    float: 'right',
  },
  loginFormInput: {
    marginBottom: '24px',
    width: '100%',
  },
  loginFormButton: {
    float: 'right',
  },
});

const Login = ({
  email,
  password,
  showPassword,
  onChangeCallback,
  onSubmitLoginCallback,
  handleShowPasswordCallback,
  errors,
  classes,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitLoginCallback();
  };

  const handleShowPassword = () => {
    handleShowPasswordCallback();
  };

  return (
    <div className="login">
      <Grid container justify="center">
        <Paper className="paper-panel" elevation={3}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} justify="center" alignItems="center">
              <div className={classes.panelBackground} />
            </Grid>
            <Grid item xs={12} sm={6} container direction="column" spacing={24} alignItems="center">
              <form onSubmit={onSubmit} className={classes.loginForm} noValidate autoComplete="off">
                <Typography className={classes.loginFormTitle} variant="headline" color="primary">Login</Typography>
                <Typography className={classes.formText} variant="body">Sign in to your account</Typography>
                <small className={classes.loginFormSmall}>
                  {'No account yet? '}
                  <Link to="/register">Signup here.</Link>
                </small>
                <TextField
                  id="mui-theme-provider-outlined-input"
                  // className="form__input"
                  className={classes.loginFormInput}
                  variant="outlined"
                  label="Email Address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  error={errors.email}
                  helperText={errors ? errors.email : ''}
                />
                <TextField
                  id="mui-theme-provider-outlined-input"
                  // className="form__input"
                  className={classes.loginFormInput}
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
                <Button type="submit" value="Submit" className={classes.loginFormButton}>Login</Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitLoginCallback: PropTypes.func.isRequired,
  handleShowPasswordCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
