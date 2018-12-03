import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

export default () => {
  return (
    <div>
      <h1 className="display-4">Page Not Found</h1>
      <p>Sorry, this page does not exist</p>
    </div>
  );
};
