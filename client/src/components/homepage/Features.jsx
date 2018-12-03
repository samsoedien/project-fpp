import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import './Features.css';

const Features = props => {
  return (
    <div className="features">
      <div className="features__background-banner">
        <div className="features__overlay" />
        <h1 calssName="heading">Benefits</h1>
      </div>
    </div>
  );
};

Features.propTypes = {

};

export default Features;
