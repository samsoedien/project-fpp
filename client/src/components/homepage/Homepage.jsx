import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import PrimaryCallsToAction from './PrimaryCallsToAction';
import Features from './Features';

const Homepage = ({ isLoggedin }) => {
  return (
    <div className="homepage">
      <div className="homepage__content">
        {(isLoggedin) ? (
          <Fragment>
            <PrimaryCallsToAction />
            <Features />
            <div style={{ height: '200px' }} />
          </Fragment>
        ) : (
            <h1>Hi</h1>
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
