import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
} from 'reactstrap';

import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__overlay" />
      <Link to="/edit-profile" className="btn btn-light landing__button">Enter Site</Link>
    </div>
  );
};

Landing.propTypes = {
};

export default Landing;
