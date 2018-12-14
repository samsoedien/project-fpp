import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  scrollArrow: {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  scrollArrowLines: {
    fill: 'none',
    stroke: '#fff',
    strokeWidth: '4',
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    animation: 'scrollArrow 3s ease infinite',
  },
  scrollArrowText: {
    fill: '#fff',
    textAnchor: 'middle',
    fontFamily: '"lato", sans-serif',
    fontSize: '0.75rem',
    fontWeight: '400',
    letterSpacing: '-0.03em',
    wordSpacing: '0.15em',
    textTransform: 'uppercase',
    animation: 'scrollArrow 3s ease infinite',
  },
  scrollArrowAnimated: {
    animation: 'scrollArrow 3s ease infinite',
  },
  '@keyframes scrollArrow': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(20px)' },
    '100%': { transform: 'translateY(0)' },
  },
});

const ScrollArrow = ({ classes }) => (
  <div className={classes.scrollArrow}>
    <Link to="/">
      <svg className="svg-canvas" version="1.1" xmlns="http://www.w3.org/2000/svg" width="320px" height="124px" viewBox="0 0 320 124" preserveAspectRatio="xMidYMid slice">
        <title>Main Hero Banner</title>
        <desc>Decription goes here</desc>
        <text className={classes.scrollArrowText} x="160" y="120">Scroll down</text>
        <g className={classes.scrollArrowLines}>
          <line x1="160" y1="100" x2="120" y2="87" />
          <line x1="160" y1="100" x2="200" y2="87" />
        </g>
      </svg>
    </Link>
  </div>
);

ScrollArrow.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ScrollArrow);
