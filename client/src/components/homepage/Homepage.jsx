import React from 'react'

import HeroBanner from './HeroBanner'
import PrimaryCallsToAction from './PrimaryCallsToAction';
import Features from './Features';
import Pricing from './Pricing';

const Homepage = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <PrimaryCallsToAction />
      <Features>
        <Pricing />
      </Features>
    </div>
  )
}

export default Homepage;