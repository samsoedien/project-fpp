import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
// import { withStyles } from '@material-ui/core/styles';

import PrimaryCallsToAction from './PrimaryCallsToAction';
import Features from './Features';
import Headline from './Headline';

const Homepage = ({ auth }) => (
  <div className="homepage">
    <div className="homepage__content">
      {(auth.isAuthenticated)
        ? (
          <Fragment>
            <PrimaryCallsToAction />
            <Features />
            <div style={{ height: '200px' }} />
          </Fragment>
        ) : (
          <Fragment>
            <Headline />
          </Fragment>
        )}
    </div>
  </div>
);

Homepage.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

export default Homepage;
