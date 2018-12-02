import React, { Component } from 'react';
import Table from './Table';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Grid } from '@material-ui/core';

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
