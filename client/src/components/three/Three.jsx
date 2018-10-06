import React, { Component } from 'react';
import PropTypes from 'prop-types';
import THREE from '../../helpers/three';
import { threeInit } from '../../helpers/threeHelpers';

class ThreeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '',
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const threeObject = threeInit();
    this.start();
    this.setState({ scene: this.scene });
  }

  componentWillUnmount() {
    this.stop();
  }

  animate() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;

    this.renderScene();
    // controls.update();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  start() {
    this.mount.appendChild(this.renderer.domElement);
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
    // window.addEventListener('resize', this.onWindowResize, false);
  }

  stop() {
    this.mount.removeChild(this.renderer.domElement);
    cancelAnimationFrame(this.frameId);
    // window.removeEventListener('resize', this.onWindowResize, false);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className="three-scene">
        <div className="container">
          <div className="row">
            <div
              className={this.state.largerWindowSizeActive ? 'col-md-12' : 'col-md-8'}
              style={{ height: '600px', width: '400px' }}
              ref={(mount) => { this.mount = mount; }}
            >
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ThreeScene.propTypes = {
};

export default ThreeScene;

/* <div className="col-md-4">
<ThreeNutritions volume={this.props.volume} nutritions={this.props.ingredient.nutritions} />
</div> */