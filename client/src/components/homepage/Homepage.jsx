import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Features from './Features';
import Headline from './Headline';
import ImageBanner from './ImageBanner';

const styles = theme => ({

});

const Homepage = ({ auth, classes }) => (
  <div className="homepage">
    <div className="homepage__content">
      {/* {(auth.isAuthenticated)
        ? (): ()} */}
      <Fragment>
        <Headline />
        {/* <Features /> */}
        {/* <div style={{ height: '200px' }} /> */}
        {/* <ImageBanner /> */}
      </Fragment>
    </div>
  </div>
);

Homepage.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Homepage);
