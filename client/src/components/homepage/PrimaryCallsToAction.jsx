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
  primaryctaCard: {},
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
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / 4}px)`;
  };

  return (
    <div className="primary-calls-to-action">
      <ScrollWrapper onWindowScroll={handleScroll}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container justify="flex-end">
              <Grid item xs={5}>
                <Paper className={classes.primaryctaPaper} id="myPrimaryCTA">
                  <Typography variant="h4" className={classes.typography}>Enrich your workspace now</Typography>
                  <Typography variant="paragraph" className={classes.typography}>Discover (brandname) by creating astounding dishes for you customers. We as food lovers understand in wanting to deliver the best experiences to your customers, building personal relations and improve your business.</Typography>
                  <Button component={Link} to="/register" variant="contained" color="primary" className={classes.ctaButton}>Get Started</Button>
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
