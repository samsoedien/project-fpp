import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  Button,
} from '@material-ui/core';

import ScrollWrapper from '../../wrappers/ScrollWrapper';

const styles = theme => ({
  root: {
    position: 'absolute',
    bottom: '80px',
    zIndex: 300,
  },
  primaryctaPaper: {
    height: '460px',
    padding: '12px 24px',
  },
  ctaHeader: {
    textAlign: 'center',
    fontSize: '14px',
  },
  typography: {
    textAlign: 'center',
  },
  ctaButton: {
    margin: '12px 0',
  },
});

const PrimaryCallsToAction = ({ classes }) => {
  const handleScroll = scrollDistance => {
    const parallaxItem = document.getElementById('myPrimaryCTA');
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / -4}px)`;
  };

  return (
    <div className={classes.root}>
      <ScrollWrapper onWindowScroll={handleScroll}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container justify="flex-end">
              <Grid item xs={4}>
                <Paper className={classes.primaryctaPaper} id="myPrimaryCTA" elevation={4}>
                  <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                      <Typography variant="h1" className={classes.ctaHeader}>Pasthrees</Typography>
                      <Typography variant="body1" className={classes.typography}>Discover Pasthrees by creating astounding dishes for you customers. We as food lovers understand in wanting to deliver the best experiences to your customers, building personal relations and improve your business.</Typography>
                      <Button component={Link} to="/register" fullWidth variant="contained" color="primary" className={classes.ctaButton}>Get Started</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ScrollWrapper>
    </div>
  );
};

PrimaryCallsToAction.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(PrimaryCallsToAction);

// TODO: build/style cta and position over herobanner
