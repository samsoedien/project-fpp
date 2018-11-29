import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    display: 'block',
    margin: '0 auto',
  },
});

const Loader = ({ classes }) => (
  <div className="loader m-auto p-3">
    <CircularProgress className={classes.progress} color="primary" />
  </div>
);

Loader.propTypes = {
  classes: PropTypes.shape({
    progress: PropTypes.object.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Loader);
