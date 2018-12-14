import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from '@material-ui/core';

import RegisterForm from './RegisterForm';
import Pricing from '../layout/Pricing';


const styles = theme => ({
  root: {
    margin: '60px 0',
    width: '90%',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  stepperButtons: {
    display: 'flex',
    justifyContent: 'center',
  },
  stepperBackButton: {
    margin: '12px 0',
    marginRight: theme.spacing.unit,

  },
  stepperNextButton: {
    margin: '12px 0',
  },

});


class StepperComponent extends Component {
  state = {
    activeStep: 0,
  };


  getSteps = () => {
    return ['Create an account', 'Select a Plan'];
  }

  getStepContent = stepIndex => {
    const {
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
    } = this.props;
    switch (stepIndex) {
      case 0:
        return (
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
          />);
      case 1:
        return <Pricing />;
      default:
        return 'Uknown stepIndex';
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const steps = this.getSteps();
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
                <div className={classes.stepperButtons}>
                  <Button
                    variant="outlined"
                    color="primary"
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.stepperBackButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.stepperNextButton}

                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

StepperComponent.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(StepperComponent);
