import React from 'react';
import PropTypes from 'prop-types';

import PrimaryCallsToAction from './PrimaryCallsToAction';
import Pricing from './Pricing';
import Features from './Features';
import './Homepage.css';

const Homepage = ({ isLoggedin }) => {
  return (
    <div className="homepage">
      <div className="homepage__content">
        {(isLoggedin) ? (
          <React.Fragment>
            <Pricing />
            <PrimaryCallsToAction />
            <Features />
          </React.Fragment>
        ) : (
            <h1>Hi There</h1>
          )}
      </div>
    </div>
  );
};

Homepage.defaultProps = {
  isLoggedin: false,
}

Homepage.propTypes = {
  isLoggedin: PropTypes.string,
};

export default Homepage;

// FIXME: isLoggedin bool never return false
