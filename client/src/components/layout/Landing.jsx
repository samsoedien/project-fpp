import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
} from '@material-ui/core';

const styles = theme => ({

});

class Landing extends Component {
  componentDidMount() {
    window.location.href = '/home';
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="landing">
        <div className={classes.landingOverlay} />
        <Typography className="paragraph--disclaimer">This application is made for demonstration purposes. Personal data might be collected.</Typography>
        <Button component={Link} to="/home">Enter Site / I Accept</Button>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Landing);
