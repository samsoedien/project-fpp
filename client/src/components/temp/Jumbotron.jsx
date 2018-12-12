import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Jumbotron, Button } from 'reactstrap';

const PrimaryCallsToAction = () => {
  return (
    <div className="primary-calls-to-action">
      <Jumbotron>
        <h1 className="display-3 font">Dish Creation Marketplaces</h1>
        <p className="lead">
          Create personalised culinary experiences
        </p>
        <hr className="my-2" />
        <p>Enrich the pattisery work space.</p>
        <p className="lead">
          <Button color="primary">Get Started</Button>
          <Button>Browse Recipes</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default PrimaryCallsToAction;