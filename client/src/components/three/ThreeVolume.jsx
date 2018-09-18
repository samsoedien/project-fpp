import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { threeCalcVol } from '../../helpers/threeHelpers';

class ThreeVolume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '',
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.mesh);
    const vol = threeCalcVol(newProps.mesh);
    this.setState({
      volume: vol,
    });
    this.props.volumeCallback(this.state.volume);
  }

  render() {
    return (
      <div className="three-volume">
        <div className="position-absolute" style={{ bottom: '8px', left: '30px' }}>
          <small className="text-muted text-lowercase">Name_dish.stl - {this.state.volume} mm2</small>
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
