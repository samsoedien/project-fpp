import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

const TestComponent = ({ classes }) => (
  <div>
    component use for testing
  </div>
);

TestComponent.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(TestComponent);
