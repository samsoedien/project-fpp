import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { threeInit, threeCalcVol } from './threeFunctions';

class ThreeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geometry: 20,
      material: { color: 0x00ff00 },
      mesh: 20,
    };
  }

  componentDidMount() {
    const { geometry, material, mesh } = this.state;
    threeInit(THREE);

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
  }

  render() {
    const { width, height } = this.props;
    return (
      <div className="three-container">
        <canvas
          style={{ width: '400px', height: '400px' }}
          ref={(mount) => { this.mount = mount }}
        />
      </div>
    );
  }
}

ThreeContainer.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default connect(null)(ThreeContainer);
