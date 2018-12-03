import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import './Banner.css';

import img1 from '../../assets/img/foodprinted_sidedish.jpg';

const Banner = () => (
  <div className="img-banner">
    <section className="img-section-header fixed-parallax">
      <div className="overlay">
        <p className="white-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda veniam magnam
          cum, sequi explicabo voluptates odit est voluptate omnis aspernatur beatae debitis qui
          repellat, non, dolore ut corporis voluptatum?
        </p>
      </div>
    </section>
  </div>
);

export default Banner;
