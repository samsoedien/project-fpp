import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';

const styles = theme => ({
  loaderProgress: {
    margin: '24px 0',
  },

});

const Loader = ({ classes }) => (
  <div className="loader">
    <Container>
      <Row>
        <Col>
          <CircularProgress className={classes.loaderProgress} color="primary" />
        </Col>
      </Row>
    </Container>
  </div>
);

Loader.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Loader);
