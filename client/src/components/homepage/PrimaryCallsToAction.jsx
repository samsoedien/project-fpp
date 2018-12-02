import React from 'react';
import {
  Container,
  Row,
  Col,
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
