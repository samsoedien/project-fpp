import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  CardDeck,
} from 'reactstrap';

import PrimaryCallsToAction from './PrimaryCallsToAction';
import Pricing from './Pricing';
import Features from './Features';
import './Homepage.css';

const Homepage = ({ isLoggedin }) => {
  return (
    <div className="homepage">
      <div className="homepage__content">
        {(isLoggedin) ? (
          <Fragment>
            <Pricing />
            <PrimaryCallsToAction />
            <Features />
          </Fragment>
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
