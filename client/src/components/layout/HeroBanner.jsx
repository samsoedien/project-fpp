import React from 'react';
import PropTypes from 'prop-types';

import './HeroBanner.css';
import ScrollArrow from './ScrollArrow';

import VID from '../../assets/videos/promotional-video.mp4';


const HeroBanner = ({ onHomepage }) => (
  <div className="hero-banner">
    {(onHomepage) ? (
      <React.Fragment>
        <div className="hero-banner__overlay" />
        <video src={VID} className="hero-banner__background" autoPlay loop muted />
        <h1 className="headline">Enrich the Kitchen</h1>
        <ScrollArrow />
      </React.Fragment>
    ) : (null)}
  </div>
);

HeroBanner.propTypes = {
  onHomepage: PropTypes.bool.isRequired,
};

export default HeroBanner;
