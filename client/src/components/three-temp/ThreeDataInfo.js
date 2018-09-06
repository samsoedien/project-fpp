import React, { Component } from 'react';
import './ThreeDataInfo.css';

class ThreeDataInfo extends Component {
  render() {
    return (
      <div className="three-data-info">
      <span>{this.props.title}</span>
      {` | `}
      <span>{this.props.volume} Grams</span>
      </div>
    );
  }
}

export default ThreeDataInfo;
