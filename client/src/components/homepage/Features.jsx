import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import BG_IMG_URL from '../../assets/img/baked-chocolate-close-up-533326.jpg';

const styles = theme => ({
  root: { margin: '24px 0' },
  featuresBackgroundBanner: {
    position: 'relative',
    height: '360px',
    width: '100%',
    backgroundImage: `url(${BG_IMG_URL})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  featuresOverlay: {
    position: 'absolute',
    top: '0',
    height: 'inherit',
    width: 'inherit',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  featureHeading: {
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
  },
  featuresText: {
    color: 'white',
    textAlign: 'center',
  },
  center: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuresCol: {
  },
});

const Features = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.featuresBackgroundBanner}>
        <div className={classes.featuresOverlay} />
        <Grid container alignItems="center" justify="center">
          <Grid item md={2}>
            <Typography variant="h5" className={classes.featuresText}>Personalised</Typography>
            <Icon />
            <Typography className={classes.featuresText}>Offer your customer unique personalised food experiences</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h5" className={classes.featuresText}>Visually Astounding</Typography>
            <Icon />
            <Typography className={classes.featuresText}>Create visually astounding chocolate pastry dishes</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h5" className={classes.featuresText}>Empowering</Typography>
            <Icon />
            <Typography className={classes.featuresText}>Spark new creativity in your workflow by putting the pastry craftmanship to the next level</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h5" className={classes.featuresText}>Differentiate</Typography>
            <Icon />
            <Typography className={classes.featuresText}>Differentiate from your competitors by reading business driving tips from our blogs</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h5" className={classes.featuresText}>Social</Typography>
            <Icon />
            <Typography className={classes.featuresText}>Participate in a safe and comfortable environment to share about your pastry passions</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Features.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Features);
