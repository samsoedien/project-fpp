import React from 'react';

import './HeroBanner.css';

const HeroBanner = ({ children }) => {
  return (
    <div className="hero-banner">
      <header className="header-main">
        {children}
      </header>
    </div>
  );
};

export default HeroBanner;