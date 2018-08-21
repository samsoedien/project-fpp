import React, { Component } from 'react';
import * as THREE from 'three';
import { threeInit } from './threeFunctions';

// import ThreeFileExporter from './ThreeFileExporter';

class ThreeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geometry: [2, 2, 2],
      material: '#433F81'
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  init() {
    const width = this.props.width;
    const height = this.props.height;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.BoxGeometry(this.state.geometry[0]);
    const material = new THREE.MeshBasicMaterial({ color: this.state.material });
    const mesh = new THREE.Mesh(geometry, material);

    camera.position.z = 4;
    scene.add(mesh);
    renderer.setClearColor('#000000');
    renderer.setSize(width, height);

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

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className="three-scene" >
        <div ref={(mount) => { this.mount = mount; }} />
      </div >
    );
  }
}

// <ThreeFileExporter name={this.state.title} scene={this.scene} />


export default ThreeScene;
