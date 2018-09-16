import React, { Component } from 'react';
import PropTypes from 'prop-types';
import THREE from '../../helpers/three';
import { threeInit, threeLights, threeCalcVol } from '../../helpers/threeHelpers';

import ThreeVolume from './ThreeVolume';
import ThreeNutritions from './ThreeNutritions';
import ThreeFileExporter from './ThreeFileExporter';

class ThreeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '',
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this)
  }

  componentDidMount() {
    this.threeInit();

    this.mount.appendChild(this.renderer.domElement);
    this.start();
    window.addEventListener('resize', this.onWindowResize, false);
    this.setState({ scene: this.scene });
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    window.removeEventListener('resize', this.onWindowResize, false);
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
    const material = new THREE.MeshLambertMaterial({ color: 0x3b240e, wireframe: false });
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
    renderer.setClearColor('#eeeeee');
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

  animate() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;

    this.renderScene();
    // controls.update();
    this.frameId = window.requestAnimationFrame(this.animate);
  }


  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height)
  }

  render() {
    return (
      <div className="three-scene">
        <div className="container">
          <div className="row">
            <div
              className="col-md-8"
              style={{ width: '600px', height: '400px' }}
              ref={(mount) => { this.mount = mount; }}
            >
              <button type="button" className="btn btn-secondary btn-sm position-absolute" style={{top: '8px', right: '4px'}}>larger</button>
              <ThreeVolume mesh={this.mesh} volumeCallback={this.volumeCallback} />
              <ThreeFileExporter name={this.props.title} scene={this.state.scene} />
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