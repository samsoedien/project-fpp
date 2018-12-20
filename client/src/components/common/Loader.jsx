import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';

const styles = theme => ({
  root: {
    height: '120px',
  },
  loaderProgress: {
    margin: '24px 0',
    height: '120px',
  },
});

const Loader = ({ classes }) => (
  <div className={classes.root}>
    <Grid container justify="center">
      <CircularProgress className={classes.loaderProgress} color="primary" />
    </Grid>
  </div>
);

Loader.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Loader);
