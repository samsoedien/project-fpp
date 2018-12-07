import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';

import BG_IMG_URL from '../../assets/img/foodprinted_sidedish.jpg';

const styles = theme => ({
  featuresBackgroundBanner: {
    position: 'relative',
    height: '360px',
    width: '100%',
    backgroundImage: `url(${BG_IMG_URL})`,
    backgroundSize: '100%',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  featuresOverlay: {
    position: 'absolute',
    top: '0',
    height: 'inherit',
    width: 'inherit',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  featureHeading: {
    textAlign: 'center',
    color: 'white',
  },
});

const Features = ({ classes }) => {
  return (
    <div className="features">
      <div className={classes.featuresBackgroundBanner}>
        <div className={classes.featuresOverlay} />
        <Typography variant="h2" className={classes.featureHeading}>Benefits</Typography>
      </div>
    </div>
  );
};

Features.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Features);
