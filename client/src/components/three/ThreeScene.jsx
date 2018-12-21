import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import THREE from '../../helpers/three';
// import { threeInit, threeLights, threeCalcVol } from '../../helpers/threeHelpers';
import { threeInit, threeLights, threeCalcVol } from '../../helpers/threeHelpers';
import ThreeVolume from './ThreeVolume';
import ThreeFileExporter from './ThreeFileExporter';

const styles = theme => ({

});

class ThreeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: '',
      largerWindowSizeActive: false,
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onClick = this.onClick.bind(this);
    this.volumeCallback = this.volumeCallback.bind(this);
  }

  componentDidMount() {
    // const threeObject = threeInit();
    // threeLights(threeObject.scene);
    this.threeInit();
    this.start();
    this.setState({ scene: this.scene });
  }

  componentWillUnmount() {
    this.stop();
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

    // if (this.props.cad === 'box') {
    //   const loader = new THREE.ObjectLoader();
    //   loader.load(
    //     model,
    //     (obj) => {
    //       scene.add(obj);
    //     },
    //     (xhr) => {
    //       console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    //     },
    //     (err) => {
    //       console.error('An error happened');
    //     },
    //   );
    // }
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // const geometry = new THREE.CylinderGeometry(20, 20, 15, 64);
    let geometry;
    if (this.props.cad === 'box' && this.props.cadText === '') {
      geometry = new THREE.BoxGeometry(20, 20, 20);
    } else if (this.props.cad === 'cylinder' && this.props.cadText === '') {
      geometry = new THREE.CylinderGeometry(20, 20, 50, 32);
      // } else if (this.props.cadText) {
      // var loader = new THREE.FontLoader();
      // loader.load('./fonts/helvetiker_regular.typeface.json', function (font) {

      //   geometry = new THREE.TextGeometry('Hello three.js!', {
      //     font: font,
      //     size: 80,
      //     height: 5,
      //     curveSegments: 12,
      //     bevelEnabled: true,
      //     bevelThickness: 10,
      //     bevelSize: 8,
      //     bevelSegments: 5
      //   });
      // });
    } else {
      geometry = new THREE.BoxGeometry(1, 1, 1);
    }

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
    this.mesh.rotation.y += 0.005;

    this.renderScene();
    // controls.update();
    this.frameId = window.requestAnimationFrame(this.animate);
  }


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

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  onClick() {
    this.setState({
      largerWindowSizeActive: !this.state.largerWindowSizeActive,
    });
  }

  volumeCallback(vol) {
    const { onVolumeHandle } = this.props;
    onVolumeHandle(vol);
    // const volume = vol;
  }


  render() {
    const { title, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <div
            className={this.state.largerWindowSizeActive ? 'col-md-12' : 'col-md-8'}
            style={{ height: '600px', width: '400px' }}
            ref={(mount) => { this.mount = mount; }}
          >
            {/* <button type="button" onClick={this.onClick} className="btn btn-secondary btn-sm position-absolute" style={{ top: '8px', right: '4px' }}>{this.state.largerWindowSizeActive ? 'Smaller' : 'Larger'}</button> */}
            <ThreeVolume mesh={this.mesh} name={title} volumeCallback={this.volumeCallback} />
            <ThreeFileExporter name={title} scene={this.state.scene} />
          </div>
        </Grid>
      </div>
    );
  }
}

ThreeScene.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ThreeScene);

/* <div className="col-md-4">
<ThreeNutritions volume={this.props.volume} nutritions={this.props.ingredient.nutritions} />
</div> */