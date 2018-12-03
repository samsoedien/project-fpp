import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import './ScrollArrow.css';

const ScrollArrow = () => (
  <div className="scroll-arrow">
    <svg className="svg-canvas" version="1.1" xmlns="http://www.w3.org/2000/svg" width="320px" height="124px" viewBox="0 0 320 124" preserveAspectRatio="xMidYMid slice">
      <title>Main Hero Banner</title>
      <desc>Decription goes here</desc>
      <text className="svg-arrow svg-arrow--text svg-arrow--animated" x="160" y="120">Scroll down</text>
      <g className="svg svg-arrow--lines svg-arrow--animated">
        <line x1="160" y1="100" x2="120" y2="87" />
        <line x1="160" y1="100" x2="200" y2="87" />
      </g>
    </svg>
  </div>
);

export default ScrollArrow;
