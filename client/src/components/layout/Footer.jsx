import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy;
      {' ' + new Date().getFullYear()}
      {' Samsoedien'}
      <ul className="list-unstyled">
        <li>Footer Link</li>
      </ul>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="">Terms of Service</a>
        </li>
        <li className="list-inline-item">
        </li>
        <li className="list-inline-item">
          <a href="">Cookie Policy</a>
        </li>
      </ul>
    </footer>
  </div>
);

Footer.propTypes = {

};

export default Footer;
