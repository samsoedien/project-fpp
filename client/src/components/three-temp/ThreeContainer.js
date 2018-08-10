import React, { Component } from 'react';
import './ThreeContainer.css';

import ThreeScene from './ThreeScene';
import ThreeDataInfo from './ThreeDataInfo';

class ThreeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Dessert Dish',
      volume: 0,
    };

    this.myCallback = this.myCallback.bind(this);
  }

  myCallback(dataFromChild) {
    console.log('vol: ' + dataFromChild);
  }

  render() {
    const { width, height } = this.props;

    return (
      <div className="three-container">
        <ThreeScene width={width} height={height} callbackVolume={this.myCallback} />
      </div>
    );
  }
}

export default ThreeContainer;
