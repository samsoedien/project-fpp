import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';
import Typist from 'react-typist';

const styles = theme => ({
  headlineText: {
    padding: '24px 0',
    textAlign: 'center',
  },
  typist: {
    display: 'inline-block',
  },
  //   display: 'inline-block',
  //   opacity: '1',
  //   animation: 'blink 1s linear infinite',
  //   '@keyframes blink': {
  //     '0%': { opacity: '1' },
  //     '50%': { opacity: '0' },
  //     '100%': { opacity: '1' },
  //   },
  // },
});

const Headline = ({ classes }) => {
  return (
    <div className={classes.headlineText}>
      <Typography variant="h4">
        {'Create beautiful dishes for your '}
        <Typist className={classes.typist}>
          patisserie
          <Typist.Backspace count={10} delay={1000} />
          restaurant
          <Typist.Backspace count={10} delay={1000} />
          chocolaterie
          <Typist.Backspace count={12} delay={1000} />
          confectionery
          <Typist.Backspace count={13} delay={1000} />
          boulanger
          <Typist.Backspace count={9} delay={1000} />
          bakery
        </Typist>
        {' business.'}
      </Typography>
    </div>
  );
};

Headline.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Headline);
