import React, { Component } from 'react';
import PropTypes from 'prop-types';
import THREE from '../../helpers/three';
import { threeInit, threeAnimate, threeLights, threeCalcVol } from '../../helpers/threeHelpers';

import ThreeVolume from './ThreeVolume';
import ThreeNutritions from './ThreeNutritions';
import ThreeFileExporter from './ThreeFileExporter';
import ThreeFeatures from './ThreeFeatures';
import ThreeNewOverlay from './ThreeNewOverlay';

class ThreeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '',
      wireframe: false,
      overlayActive: true,
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    // this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onWireframeToggleCallback = this.onWireframeToggleCallback.bind(this);
    this.cubeSelectorCallback = this.cubeSelectorCallback.bind(this);
  }

  componentDidMount() {
    const threeObject = threeInit(window.innerWidth, window.innerHeight);
    this.frameId = threeAnimate();
    threeLights(threeObject.scene);
    this.renderer = threeObject.renderer;
    this.scene = threeObject.scene;
    this.mesh = threeObject.mesh;
    //this.threeInit();
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  componentWillUpdate() {
    this.mesh.material.wireframe = this.state.wireframe;
  }

  threeInit() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.BoxGeometry(10, 20, 20);
    const material = new THREE.MeshLambertMaterial({ color: 0x3b240e, wireframe: this.state.wireframe });
    const mesh = new THREE.Mesh(geometry, material);

    const ambiLight = new THREE.AmbientLight(0xffffff, 0.4);
    const pointLight = new THREE.PointLight(0xffffff, 1.6);
    const dirLight = new THREE.DirectionalLight(0xffffff, 4);
    pointLight.position.set(20, 120, 400);
    dirLight.position.set(-60, 0, 60);

    scene.add(ambiLight);
    scene.add(pointLight);

    camera.position.z = 50;
    scene.add(mesh);
    renderer.setClearColor(0x1c1c1c);
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
  }

  // animate() {
  //   this.mesh.rotation.x += 0.01;
  //   this.mesh.rotation.y += 0.01;

  //   this.renderScene();
  //   // controls.update();
  //   this.frameId = window.requestAnimationFrame(this.animate);
  // }


  start() {
    this.mount.appendChild(this.renderer.domElement);
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
    window.addEventListener('resize', this.onWindowResize, false);
  }

  stop() {
    this.mount.removeChild(this.renderer.domElement);
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.onWindowResize, false);
  }

  // renderScene() {
  //   this.renderer.render(this.scene, this.camera);
  // }

  onWindowResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  volumeCallback(vol) {
    const volume = vol;
  }

  onWireframeToggleCallback() {
    this.setState(prevState => ({
      wireframe: !prevState.wireframe,
    }));
  }

  cubeSelectorCallback() {
    this.setState({
      overlayActive: false,
    });
  }

  render() {
    return (
      <div className="three-scene">
        <div ref={(mount) => { this.mount = mount; }}>              
          <ThreeVolume mesh={this.mesh} volumeCallback={this.volumeCallback} />
          <ThreeFileExporter name={this.props.title} scene={this.state.scene} />
          <ThreeFeatures onWireframeToggleCallback={this.onWireframeToggleCallback} />
          {this.state.overlayActive ? (<ThreeNewOverlay cubeSelectorCallback={this.cubeSelectorCallback} />) : null}
        </div>
      </div>
    );
  }
}

ThreeScene.propTypes = {
};

export default ThreeScene;
