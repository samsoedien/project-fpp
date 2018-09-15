import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveThreeScene } from '../actions/threeActions';

import THREE from '../helpers/three';
import { threeCalcVol } from '../helpers/threeHelpers';

import ThreeVolume from '../components/three/ThreeVolume';
import ThreeNutritions from '../components/three/ThreeNutritions';
import ThreeFileExporter from '../components/three/ThreeFileExporter';

class ThreeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '',
      title: 'Cad model',
      ingredient: {
        nutritions: {
          kcal: 220,
        },
      },
      scene: '',
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.onFileSave = this.onFileSave.bind(this);
    this.volumeCallback = this.volumeCallback.bind(this);
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

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  onFileSave() {
    // Instantiate a exporter
    const exporter = new THREE.GLTFExporter();

    // Parse the input and generate the glTF output
    exporter.parse(this.scene, function (gltf) {
      console.log(gltf);
      //downloadJSON( gltf );
    });
    const threeData = {
      scene: exporter,
    };
    this.props.saveThreeScene(threeData);
  }

  volumeCallback(vol) {
    // this.setState({
    //   volume: vol,
    // });
  }

  updateVol(vol) {
    this.setState({
      volume: vol,
    });
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
          >
            <ThreeVolume mesh={this.mesh} volumeCallback={this.volumeCallback} />
            <ThreeFileExporter name={this.state.title} scene={this.scene} />
          </div>
          <div className="col-md-4">
            <ThreeNutritions volume={this.state.volume} nutritions={this.state.ingredient.nutritions} />
          </div>
          <button type="button" onClick={this.onFileSave} className="btn btn-secondary">Save Handler</button>
        </div>
      </div>
    );
  }
}

ThreeContainer.propTypes = {
  saveThreeScene: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  three: state.three,
});

export default connect(mapStateToProps, { saveThreeScene })(ThreeContainer);
