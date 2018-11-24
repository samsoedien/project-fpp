import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Label,
  Input,
  Button,
} from 'reactstrap';

import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__overlay" />
      <p className="paragraph--disclaimer">This application is made for demonstration purposes. Personal data might be collected.</p>
      <Label check>
        <Input type="checkbox" />
        {'I Accept'}
      </Label>
      <Link to="/edit-profile" className="btn btn-light landing__button">Enter Site</Link>
    </div>
  );
};

Landing.propTypes = {
};

export default Landing;

// TODO: Design compelling landing page
