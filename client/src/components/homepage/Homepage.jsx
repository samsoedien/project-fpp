import React from 'react';
import PropTypes from 'prop-types';

import VID from '../../assets/videos/promotional-video.mp4';

import HeroBanner from './HeroBanner'
import PrimaryCallsToAction from './PrimaryCallsToAction';
import Features from './Features';
import ScrollArrow from './ScrollArrow';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <HeroBanner className="hero-banner">
        <div className="hero-banner__overlay" />
        <video src={VID} className="hero-banner__background" autoPlay loop muted />
        <h1 className="headline">Enrich the Kitchen</h1>
        <ScrollArrow />
      </HeroBanner>
      <div className="homepage__content">
        <PrimaryCallsToAction />
      </div>
    </div>
  );
};

Homepage.propTypes = {

};

export default Homepage;
