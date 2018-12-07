import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import ScrollArrow from './ScrollArrow';

import VID from '../../assets/videos/promotional-video.mp4';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    boxShadow: '0px 0px 42px 5px rgba(0, 0, 0, 0.8)',
  },
  herobannerOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
  },
  herobannerVideo: { height: '100vh' },
  herobannerTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
  },
});

const HeroBanner = ({ onHomepage, classes }) => (
  <div className="hero-banner">
    {(onHomepage) ? (
      <Fragment>
        <div className={classes.herobannerOverlay} />
        <video src={VID} className={classes.herobannerVideo} autoPlay loop muted />
        <h1 className={classes.herobannerTitle}>Enrich the Kitchen</h1>
        <ScrollArrow />
      </Fragment>
    ) : (null)}
  </div>
);

HeroBanner.defaultProps = {
  onHomepage: true,
}

HeroBanner.propTypes = {
  onHomepage: PropTypes.bool,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(HeroBanner);
