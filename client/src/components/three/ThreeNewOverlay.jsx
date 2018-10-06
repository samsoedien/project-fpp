import React from 'react';
import PropTypes from 'prop-types';

const ThreeNewOverlay = ({
  shapeSelectorCallback,
  textSelectorCallback,
}) => {
  const cubeSelector = () => {
    shapeSelectorCallback('box');
  };

  const coneSelector = () => {
    shapeSelectorCallback('cone');
  };

  const cylinderSelector = () => {
    shapeSelectorCallback('cylinder');
  };

  const sphereSelector = () => {
    shapeSelectorCallback('sphere');
  };

  const textSelector = () => {
    textSelectorCallback();
  }

  return (
    <div className="three-new-overlay">
      <div className="bg-secondary position-absolute mt-5 p-2 rounded" style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', width: '480px', opacity: '0.8' }}>
        <h4 className="text-center">Welcome to the recipe editor</h4>
        <p className="text-center">Select a geomery to start building</p>
        <button type="button" onClick={cubeSelector} className="btn btn-secondary btn-sm">Cube</button>
        <button onClick={coneSelector} className="btn btn-secondary btn-sm">Cone</button>
        <button onClick={cylinderSelector} className="btn btn-secondary btn-sm">Cylinder</button>
        <button onClick={sphereSelector} className="btn btn-secondary btn-sm">Sphere</button>
        <button onClick={textSelector} className="btn btn-secondary btn-sm">Text</button>
      </div>
    </div>
  );
};

ThreeNewOverlay.propTypes = {
  shapeSelectorCallback: PropTypes.func.isRequired,
};

export default ThreeNewOverlay;

// TODO: if scene is empty display overlay functionality
// TODO: Selecor should be changed into radio buttons
