import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { threeInit, threeCalcVol } from './threeFunctions';

const Three = (props) => {
  const { width, height } = props;
  return (
    <div className="three-container">
      <canvas
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    </div>
  );
};

Three.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Three;
