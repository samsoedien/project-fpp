import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import * as THREE from 'three';
import THREE from './three';
import { threeCalcVol } from '../components/three/threeFunctions';

import ThreeNutritions from '../components/three/ThreeNutritions';
import ThreeFileExporter from '../components/three/ThreeFileExporter';
import MODEL from '../components/three/utah-teapot.json';


class ThreeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '',
      title: 'Cad model',
    };


    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.threeInit();
    const vol = threeCalcVol(THREE, this.mesh);
    this.updateVol(vol);
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  updateVol(vol) {
    this.setState({
      volume: vol,
    });
  }

  threeInit() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.BoxGeometry(10, 20, 20);
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
    const mesh = new THREE.Mesh(geometry, material);

    camera.position.z = 50;
    scene.add(mesh);
    renderer.setClearColor('#000000');
    renderer.setSize(width, height);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.mesh = mesh;

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;

    this.renderScene();
    //controls.update();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-8"
            style={{ width: '600px', height: '400px' }}
            ref={(mount) => { this.mount = mount; }}
          />
          <div className="col-md-4">
            <ThreeNutritions volume={this.state.volume} />
          </div>
          <ThreeFileExporter name={this.state.title} scene={this.scene} />
        </div>
        
      </div>
    );
  }
}

ThreeContainer.propTypes = {
};

export default connect(null)(ThreeContainer);
