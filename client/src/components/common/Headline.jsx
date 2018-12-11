import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Typist, { Backspace } from 'react-typist';

const styles = theme => ({
  headlineText: {
    margin: '40px none',
    textAlign: 'center',
  },
});

const Headline = ({ classes }) => {
  return (
    <div className="headline">
      <Typist>
        <span className={classes.headlineText}>Hi there</span>
        <Backspace count={9} delay={600} />
        <span className={classes.headlineText}>Hello there</span>
      </Typist>
    </div>
  );
};

Headline.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Headline);
