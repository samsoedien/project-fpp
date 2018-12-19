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
    position: 'absolute',
    top: '78%',
    left: '12%',
    // padding: '24px 0',
    // textAlign: 'center',
  },
  typography: {
    fontFamily: '"lato", sans-serif',
    fontWeight: '100',
    fontSize: '1em',
    letterSpacing: '0.05rem',
    textTransform: 'uppercase',
    color: 'white',
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
  const words = ['patisserie', 'restaurant', 'chocolaterie', 'confectionery', 'boulanger', 'bakery'];
  for (let i = 6; i < 18; i++) {
    words[i] = words[i - 6];
  }

  return (
    <div className={classes.headlineText}>
      {/* <Typography variant="h1">Pasthrees</Typography> */}
      <Typography variant="h5" className={classes.typography}>
        {'Create beautiful dishes for your '}
        <Typist className={classes.typist}>
          {words.map((word, i) => (
            <span key={word}>
              {word}
              <Typist.Backspace
                count={word.length}
                delay={(i + 1) * 1000}
              />
            </span>
          ))}
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
