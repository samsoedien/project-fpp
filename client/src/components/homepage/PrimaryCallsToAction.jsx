import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { Grid, Paper } from '@material-ui/core';

import ScrollWrapper from '../../wrappers/ScrollWrapper';
// import './PrimaryCallToAction.css';

const PrimaryCallsToAction = () => {
  const handleScroll = scrollDistance => {
    const parallaxItem = document.getElementById('myPrimaryCTA');
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / 4}px)`;
  };

  return (
    <div className="primary-calls-to-action">
      <ScrollWrapper onWindowScroll={handleScroll}>
        <Card body className="text-center primary-cta__card" id="myPrimaryCTA">
          <CardTitle>Culinary dishes</CardTitle>
          <CardText>Enrich the culinary experience</CardText>
          <Button>Get Started</Button>
        </Card>
      </ScrollWrapper>
    </div>
  );
};

export default PrimaryCallsToAction;
