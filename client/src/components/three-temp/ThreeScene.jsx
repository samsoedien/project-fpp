import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/OrbitControls';
import { OBJLoader } from 'three/OBJLoader';
import { MTLLoader } from 'three/MTLLoader';
import { STLLoader } from 'three/STLLoader';

import './ThreeScene.css';
//import ThreeFileImporter from './ThreeFileImporter';
import ThreeFileExporter from './ThreeFileExporter';
import MODEL from './utah-teapot.json';

class ThreeScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Dessert Dish',
      volume: 5,
    };

    this.init = this.init.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init() {
    //const width = this.mount.clientWidth;
    //const height = this.mount.clientHeight;

    const width = this.props.width;
    const height = this.props.height;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
    camera.position.z = 50;
    camera.position.y = 12;

    const geometry = new THREE.BoxGeometry(12, 12, 12);
    //const geometry = new THREE.CylinderGeometry(4, 4, 10, 60);
    //const geometry = new THREE.CylinderGeometry( 8, 8, 8, 18 );
    const material = new THREE.MeshLambertMaterial({ color: 0x3b240e, wireframe: false });
    let mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const ambiLight = new THREE.AmbientLight(0xffffff, 0.4);
    const pointLight = new THREE.PointLight(0xffffff, 1.6);
    const dirLight = new THREE.DirectionalLight(0xffffff, 4);
    pointLight.position.set(20, 120, 400);
    dirLight.position.set(-60, 0, 60)

    scene.add(ambiLight);
    scene.add(pointLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xf9f9f9);
    renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.mesh = mesh;

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    /**/

    var loadingScreen = {
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(90, width / height, 0.1, 10000),
      box: new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.1, 0.1),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      )
    };

    var LOADING_MANAGER = null;
    var RESOURCES_LOADED = false;

    loadingScreen.box.position.set(0, 0, 0.5);
    loadingScreen.camera.lookAt(loadingScreen.box.position);
    loadingScreen.scene.add(loadingScreen.box);

    const loadingManager = new THREE.LoadingManager();

    loadingManager.onProgress = function (item, loaded, total) {
      console.log(item, loaded, total);
    };

    loadingManager.onLoad = function () {
      console.log("loaded all resources!");
      RESOURCES_LOADED = true;
    };
    /*
        const loader = new THREE.ObjectLoader(loadingManager);
        loader.load(
          '../src/components/three/utah-teapot.json', (obj) => {
            scene.add( obj );
            obj.position.x = 0;
    
            var sizer = new THREE.Box3().setFromObject(obj);
            console.log(sizer.size().x*sizer.size().z*sizer.size().y);
          },
          (xhr) => {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
          },
          (err) => {
            console.error( 'An error happened' );
          }
        );
    */
    var mtlLoader = new THREE.MTLLoader(loadingManager);
    mtlLoader.setTexturePath('../src/components/three/model/');
    mtlLoader.setPath('../src/components/three/model/');
    mtlLoader.load('r2-d2.mtl', function (materials) {

      materials.preload();

      var objLoader = new THREE.OBJLoader(loadingManager);
      objLoader.setPath('../src/components/three/model/');
      objLoader.load('hexagon.obj', function (object) {

        object.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material.color.setHex(0x3b240e);
          }
        });

        scene.add(object);

        camera.position.z += 60;
        camera.position.y += 30;

      });
    });


    const stlLoader = new THREE.STLLoader();
    stlLoader.load(
      '../src/components/three/dome.stl', (obj) => {
        this.scene.add(obj);
      }
    );

    var animate = function () {

      if (RESOURCES_LOADED == false) {
        requestAnimationFrame(animate);
        renderer.render(loadingScreen.scene, loadingScreen.camera);
        loadingScreen.box.rotation.y -= 0.05;

        return;
      }

      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    /**/

    this.mount.appendChild(this.renderer.domElement);
    this.start();

    this.calcVolume(mesh);
    this.someFn();
  }


  volumeOfT(p1, p2, p3) {
    var v321 = p3.x * p2.y * p1.z;
    var v231 = p2.x * p3.y * p1.z;
    var v312 = p3.x * p1.y * p2.z;
    var v132 = p1.x * p3.y * p2.z;
    var v213 = p2.x * p1.y * p3.z;
    var v123 = p1.x * p2.y * p3.z;
    return (-v321 + v231 + v312 - v132 - v213 + v123) / 6.0;
  }

  calcVolume(object) {
    var volumes = 0.0;

    for (var i = 0; i < object.geometry.faces.length; i++) {
      var Pi = object.geometry.faces[i].a;
      var Qi = object.geometry.faces[i].b;
      var Ri = object.geometry.faces[i].c;

      var P = new THREE.Vector3(object.geometry.vertices[Pi].x, object.geometry.vertices[Pi].y, object.geometry.vertices[Pi].z);
      var Q = new THREE.Vector3(object.geometry.vertices[Qi].x, object.geometry.vertices[Qi].y, object.geometry.vertices[Qi].z);
      var R = new THREE.Vector3(object.geometry.vertices[Ri].x, object.geometry.vertices[Ri].y, object.geometry.vertices[Ri].z);
      volumes += this.volumeOfT(P, Q, R);
    }

    var loadedObjectVolume = Math.abs(volumes);
    console.log('The volume of the object is ' + loadedObjectVolume);

    this.setState({
      volume: loadedObjectVolume
    });
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
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
    //this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.004;
    this.scene.rotation.y += 0.002;

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  someFn() {
    this.props.callbackVolume(this.state.volume);
  }

  render() {
    return (
      <div>
        <div className="three-scene"
          style={{ width: '800px', height: '360px' }}
          ref={(mount) => { this.mount = mount }}
        />
        <ThreeFileExporter name={this.state.title} scene={this.scene} />
      </div>
    )
  }
}

export default ThreeScene;
