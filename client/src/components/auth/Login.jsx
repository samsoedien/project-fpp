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
      <Container>
        <Paper className="paper-panel" elevation={3}>
          <Container>
            <Row>
              <Col xs="12" sm="6">
                <div className={classes.panelBackground} />
              </Col>
              <Col xs="12" sm="6">
                <form onSubmit={onSubmit} className={classes.loginForm} noValidate autoComplete="off">
                  <Typography className={classes.loginFormTitle} variant="h3" color="primary">Login</Typography>
                  <Typography className={classes.formText} variant="body1">Sign in to your account</Typography>
                  <small className={classes.loginFormSmall}>
                    {'No account yet? '}
                    <Link to="/register">Signup here.</Link>
                  </small>
                  <TextField
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
              </Col>
            </Row>
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitLoginCallback: PropTypes.func.isRequired,
  handleShowPasswordCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Login);
