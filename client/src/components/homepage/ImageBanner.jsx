import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

import IMG from '../../assets/img/pastry-banner.jpg';

const styles = theme => ({
  root: {
    padding: '24px 0',
  },
  image: {
    position: 'relative',
    height: '280px',
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, .35), rgba(0, 0, 0, 0)',
  },
  ctaContent: {
    margin: '12px',
  },
  typography: {
    color: theme.palette.common.white,
  },
});

const ImageBanner = ({ classes }) => (
  <div className={classes.root}>
    <Grid container justify="center">
      <Grid item xs={12} sm={10}>
        <div style={{ backgroundImage: `url(${IMG})` }} className={classes.image}>
          <div className={classes.overlay} />
          <div className={classes.ctaContent}>
            <Grid container direction="row" alignContent="center">
              <Grid item xs={4}>
                <Typography variant="h4" className={classes.typography}>Improve your workflow and create beautiful dishes</Typography>
                <Typography variant="body1" className={classes.typography}>Sign up now!</Typography>
                <Button component={Link} to="/register" variant="outlined" className={classes.button}>Get Started</Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
);

ImageBanner.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ImageBanner);
