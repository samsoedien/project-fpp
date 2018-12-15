import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'relative',
    height: '280px',
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    // backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',
  },
  overlay: {},
});

const Banner = ({ bannerImage, children, classes }) => (
  <div
    className={classes.root}
    style={{ backgroundImage: `url(${bannerImage})` }}
  >
    {children}
  </div>
);

Banner.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired, // eslint-disable-line
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Banner);