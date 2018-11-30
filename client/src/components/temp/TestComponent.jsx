import React, { Component } from 'react';
import Table from './Table';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Grid from './Grid';

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="12">
              <Table />
            </Col>
          </Row>
        </Container>
        <Grid />
      </div>
    );
  }
}
