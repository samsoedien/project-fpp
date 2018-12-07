import React, { Component } from 'react';
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
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class Register extends Component {
  state = {
    activeSteps: 0,
    completed: {},
  }

  onChange = e => {
    const onChangeCallback = this.props;
    onChangeCallback(e);
  };

  onSubmit = e => {
    e.preventDefault();
    const onSubmitRegisterCallback = this.props;
    onSubmitRegisterCallback();
  };

  handleShowPassword = () => {
    const handleShowPasswordCallback = this.props;
    handleShowPasswordCallback();
  };


  getStepContent = step => {
    const {
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
    } = this.props;
    switch (step) {
      case 0:
        return (
        <Register
        /> 
        );
      case 1:
        return 'Step 2: What is an ad group anyways?';
      case 2:
        return 'hi'
      default:
        return 'Unknown step';
    }
  }

  getSteps = () => {
    return ['Create an Account', 'Make a Profile', 'Choose a Plan'];
  }

  totalSteps = () => {
    return this.getSteps().length;
  };

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = this.getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext();
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {},
    });
  };

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  render() {
    const {
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
    } = this.props;
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
}

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
