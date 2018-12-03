import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import './HeroBanner.css';
import ScrollArrow from './ScrollArrow';

import VID from '../../assets/videos/promotional-video.mp4';


const HeroBanner = ({ onHomepage }) => (
  <div className="hero-banner">
    {(onHomepage) ? (
      <Fragment>
        <div className="hero-banner__overlay" />
        <video src={VID} className="hero-banner__background" autoPlay loop muted />
        <h1 className="headline">Enrich the Kitchen</h1>
        <ScrollArrow />
      </Fragment>
    ) : (null)}
  </div>
);

HeroBanner.propTypes = {
  onHomepage: PropTypes.bool.isRequired,
};

export default HeroBanner;
