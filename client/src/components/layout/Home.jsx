import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

import HeroBanner from './HeroBanner';

const Home = () => {
  return (
    <div className="front-page">
      <HeroBanner />
      <Jumbotron>
        <h1 className="display-3 font">Culinary Experiences</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>Enrich the pattisery work space.</p>
        <p className="lead">
          <Button color="primary">Get Started</Button>
        </p>
      </Jumbotron>
      <h1>FPP</h1>
    </div>
  );
};

export default Home;
