import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
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

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
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
  }

  return (
    <div className="login">
      <Grid container>
        <Typography variant="headline" color="primary">Login</Typography>
        <Typography variant="body">Sign in to your account</Typography>
        <Grid item>
          <form onSubmit={onSubmit} className={classes.container} noValidate autoComplete="off">
            <FormControl>
              <TextField
                id="mui-theme-provider-outlined-input"
                variant="outlined"
                type="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                error={errors.email}
              />
              <FormHelperText error>{errors ? errors.email : ''}</FormHelperText>
            </FormControl>
            <FormControl className={classNames(classes.margin, classes.textField)}>
              <TextField
                id="mui-theme-provider-outlined-input"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                name="password"
                value={password}
                onChange={onChange}
                error={errors.password}
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
              <FormHelperText error>{errors ? errors.password : ''}</FormHelperText>
            </FormControl>
            <Button type="submit" value="Submit">Login</Button>
          </form>
        </Grid>
        <small>
          {'No account yet? '}
          <Link to="/register">Signup here.</Link>
        </small>
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
