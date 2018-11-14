import React from 'react';

import './HeroBanner.css';
import VID from '../../assets/videos/promotional-video.mp4';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <video src={VID} className="background-video" autoPlay loop muted />
      <h1>FPP</h1>
      <div className="hero-banner--overlay" />
    </div>
  );
};

export default HeroBanner;
