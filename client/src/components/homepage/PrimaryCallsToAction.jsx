import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Button,
} from '@material-ui/core';

import ScrollWrapper from '../../wrappers/ScrollWrapper';

const styles = theme => ({
  primaryctaCard: {},
});

const PrimaryCallsToAction = ({ classes }) => {
  const handleScroll = scrollDistance => {
    const parallaxItem = document.getElementById('myPrimaryCTA');
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / 4}px)`;
  };

  return (
    <div className="primary-calls-to-action">
      <ScrollWrapper onWindowScroll={handleScroll}>
        <Container>
          <Paper className={classes.primaryctaPaper} id="myPrimaryCTA">
            <Typography variant="h3">Enrich your workspace now</Typography>
            <Typography variant="paragraph">paragraph text</Typography>
            <Button component={Link} to="/register">Get Started</Button>
          </Paper>
        </Container>
      </ScrollWrapper>
    </div>
  );
};

PrimaryCallsToAction.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrimaryCallsToAction);

// TODO: build/style cta and position over herobanner
