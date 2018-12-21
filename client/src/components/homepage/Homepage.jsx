import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Features from './Features';
import Headline from './Headline';
import Story from './Story';
// import ImageBanner from './ImageBanner';

import BG_IMG_URL from '../../assets/img/dough-flour-hands-784636.jpg';

const styles = theme => ({
  backgroundImage: {
    position: 'relative',
    height: '360px',
    width: '100%',
    backgroundImage: `url(${BG_IMG_URL})`,
    backgroundSize: '100%',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  }
});

const Homepage = ({ auth, classes }) => (
  <div className="homepage">
    <div className="homepage__content">
      {/* {(auth.isAuthenticated)
        ? (): ()} */}
      <Fragment>
        <Headline />
        <Story />
        {/* <Features /> */}
        {/* <div className={classes.backgroundImage} /> */}
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
