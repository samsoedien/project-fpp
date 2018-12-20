import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  MobileStepper,
  Paper,
  Button,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

import FEATURED_RECIPE from '../../assets/img/pastry1.jpg';
import HOLDIDAY_SPECIAL from '../../assets/img/pastry2.jpg';
import FAVORITED_RECIPE from '../../assets/img/pastry3.jpeg';
import COMMENTED_RECIPE from '../../assets/img/pastry4.jpeg';

const tutorialSteps = [
  {
    label: 'Featured Recipe',
    imgPath: FEATURED_RECIPE,
  },
  {
    label: 'Holiday Special',
    imgPath: HOLDIDAY_SPECIAL,
  },
  {
    label: 'Most Favorited Recipe',
    imgPath: FAVORITED_RECIPE,
  },
  {
    label: 'Most Commented Recipe',
    imgPath: COMMENTED_RECIPE,
  },
];

const styles = theme => ({
  root: {
    margin: '32px 0',
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
});

class Carousel extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <Grid container justify="center">
        <div className={classes.root}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
          </Paper>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
          />
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
            </Button>
            }
          />
        </div>
      </Grid>
    );
  }
}

Carousel.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles, { withTheme: true })(Carousel);
