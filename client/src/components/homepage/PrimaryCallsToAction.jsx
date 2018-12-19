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
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / -8}px)`;
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
                      <Typography variant="h5" className={classes.ctaHeader}>What are you going to bake today?</Typography>
                      <Typography variant="body1" className={classes.typography}>Join Pasthrees and put your creative pastry skills to test by creating beautiful and astounding dishes for your customers.</Typography>
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
