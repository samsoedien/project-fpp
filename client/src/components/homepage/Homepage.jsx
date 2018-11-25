import React from 'react';
import PropTypes from 'prop-types';

import PrimaryCallsToAction from './PrimaryCallsToAction';
import Features from './Features';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__content">
        <PrimaryCallsToAction />
      </div>
    </div>
  );
};

Homepage.propTypes = {

};

export default Homepage;
