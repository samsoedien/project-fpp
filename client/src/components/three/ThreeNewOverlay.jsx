import React from 'react';
import PropTypes from 'prop-types';
import { threeNewGeometry } from '../../helpers/threeHelpers';

const ThreeNewOverlay = ({
  cubeSelectorCallback,
}) => {
  const cubeSelector = () => {
    console.log(threeNewGeometry('box'));
    cubeSelectorCallback();
  };

  return (
    <div className="three-new-overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 bg-secondary position-absolute" style={{ height: '320px', opacity: '0.8' }}>
            <h4>Welcome to the recipe editor</h4>
            <p>Select a geomery to start building</p>
            <button onClick={cubeSelector} className="btn btn-secondary btn-sm">Cube</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ThreeNewOverlay.propTypes = {
  cubeSelectorCallback: PropTypes.func.isRequired,
};

export default ThreeNewOverlay;
