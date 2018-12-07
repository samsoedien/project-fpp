import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

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
  featuresText: {
    color: 'white',
    textAlign: 'center',
  },
});

const Features = ({ classes }) => {
  return (
    <div className="features">
      <div className={classes.featuresBackgroundBanner}>
        <div className={classes.featuresOverlay} />
        <Container>
          <Typography variant="h2" className={classes.featureHeading}>Benefits</Typography>
          <Row>
            <Col md="2">
              <Typography variant="h5" className={classes.featuresText}>Personalised</Typography>
              <Icon />
              <Typography className={classes.featuresText}>Offer your customer unique personalised food experiences</Typography>
            </Col>
            <Col md="2">
              <Typography variant="h5" className={classes.featuresText}>Visually Astounding</Typography>
              <Icon />
              <Typography className={classes.featuresText}>Create visually astounding chocolate pastry dishes</Typography>
            </Col>
            <Col md="2">
              <Typography variant="h5" className={classes.featuresText}>Empowering</Typography>
              <Icon />
              <Typography className={classes.featuresText}>Spark new creativity in your workflow by putting the pastry craftmanship to the next level</Typography>
            </Col>
            <Col md="2">
              <Typography variant="h5" className={classes.featuresText}>Differentiate</Typography>
              <Icon />
              <Typography className={classes.featuresText}>Differentiate from your competitors by reading business driving tips from our blogs</Typography>
            </Col>
            <Col md="2">
              <Typography variant="h5" className={classes.featuresText}>Social</Typography>
              <Icon />
              <Typography className={classes.featuresText}>Participate in a safe and comfortable environment to share about your pastry passions</Typography>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

Features.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Features);
