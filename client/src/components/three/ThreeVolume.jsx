import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { threeCalcVol } from '../../helpers/threeHelpers';

class ThreeVolume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '',
      updated: false,
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.mesh);
    const vol = threeCalcVol(newProps.mesh);
    this.setState({
      volume: vol,
    });
    console.log(this.state.volume);
  }

  componentWillUpdate() {
    console.log(this.state.volume);
    if (!this.state.updated) {
      this.props.volumeCallback(this.state.volume);
      this.setState({
        updated: true,
      })
    }
  }

  render() {
    return (
      <div className="three-volume">
        <div className="position-absolute" style={{ bottom: '8px', left: '30px' }}>
          <small className="text-muted text-lowercase">{this.props.name} - {this.state.volume} mm2</small>
        </div>
      </div>
    );
  }
}

ThreeVolume.propTypes = {
  volume: PropTypes.number.isRequired,
};

export default ThreeVolume;

// FIXME: Need to investigate for best lifecycle method.
