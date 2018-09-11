import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { threeInit, threeCalcVol } from './threeFunctions';

const ThreeRecipe = (props) => {
  const { width, height } = props;
  return (
    <div className="three-recipe">
      <canvas
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    </div>
  );
};

ThreeRecipe.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ThreeRecipe;
