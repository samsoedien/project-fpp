import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Pricing from '../layout/Pricing';

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        <Pricing />
      </div>
    );
  }
}
