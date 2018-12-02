import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';

const styles = theme => ({
  loaderProgress: {
    margin: '24px 0',
  },

});

const Loader = ({ classes }) => (
  <div className="loader">
    <Grid container justify="center">
      <Grid item>
        <CircularProgress className={classes.loaderProgress} color="primary" />
      </Grid>
    </Grid>
  </div>
);

Loader.propTypes = {
  classes: PropTypes.shape({
    progress: PropTypes.object.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Loader);
