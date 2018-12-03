import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Table from './Table';

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        <Grid spacing={16} container justify="center">
          <Grid item xs={8}>
            <Table />
          </Grid>
          <Grid item xs={4}>
            hi
          </Grid>
        </Grid>
      </div>
    );
  }
}
