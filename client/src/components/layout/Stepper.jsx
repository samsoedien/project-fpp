import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Stepper,
  Step,
  StepButton,
  Button,
} from '@material-ui/core';

const styles = theme => ({
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

class HorizontalNonLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    completed: {},
  };

  getStepContent = step => {
    const { } = this.props;
    switch (step) {
      case 0:
        return 'hi'
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
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepButton
                  onClick={this.handleStep(index)}
                  completed={this.state.completed[index]}
                >
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    Back
                </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    Next
                </Button>
                  {activeStep !== steps.length &&
                    (this.state.completed[this.state.activeStep] ? (
                      <Typography variant="caption" className={classes.completed}>
                        Step {activeStep + 1} already completed
                    </Typography>
                    ) : (
                        <Button variant="contained" color="primary" onClick={this.handleComplete}>
                          {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                        </Button>
                      ))}
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

HorizontalNonLinearStepper.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(HorizontalNonLinearStepper);
