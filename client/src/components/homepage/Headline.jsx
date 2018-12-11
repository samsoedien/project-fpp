import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';
import Typist from 'react-typist';

const styles = theme => ({
  headlineText: {
    textAlign: 'center',
  },
});

const Headline = ({ classes }) => {
  return (
    <div className="headline">
      <Typist>
        <Typography className={classes.headlineText}>Hi there</Typography>
      </Typist>
    </div>
  );
};

Headline.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Headline);
