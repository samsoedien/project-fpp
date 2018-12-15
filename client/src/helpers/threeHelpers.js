import THREE from './three';
// import FONT from '../assets/fonts/helvetiker_bold.typeface.json';

// export const threeDetector = () => {
//   if (Detector.webgl) {
//     // Initiate function or other initializations here
//   } else {
//     let warning = Detector.getWebGLErrorMessage();
//     document.getElementById('container').appendChild(warning);
//   }
// };

export const threeInit = (width, height) => {
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

  camera.position.z = 50;

  const threeObject = {
    scene,
    camera,
    renderer,
    material,
    mesh,
  };
  return threeObject;
};

export const animate = () => {
  this.mesh.rotation.x += 0.01;
  this.mesh.rotation.y += 0.01;

  this.renderScene();
  // controls.update();
  this.frameId = window.requestAnimationFrame(this.animate);
};



export const threeLights = (scene) => {
  const ambiLight = new THREE.AmbientLight(0xffffff, 0.4);
  const pointLight = new THREE.PointLight(0xffffff, 1.6);
  const dirLight = new THREE.DirectionalLight(0xffffff, 4);
  pointLight.position.set(20, 120, 400);
  dirLight.position.set(-60, 0, 60);

  scene.add(ambiLight);
  scene.add(pointLight);
};

export const threeCalcVol = (object) => {
  const volumeOfT = (p1, p2, p3) => {
    let v321 = p3.x * p2.y * p1.z;
    let v231 = p2.x * p3.y * p1.z;
    let v312 = p3.x * p1.y * p2.z;
    let v132 = p1.x * p3.y * p2.z;
    let v213 = p2.x * p1.y * p3.z;
    let v123 = p1.x * p2.y * p3.z;
    return (-v321 + v231 + v312 - v132 - v213 + v123) / 6.0;
  };

  let volumes = 0.0;

  for (let i = 0; i < object.geometry.faces.length; i++) {
    let Pi = object.geometry.faces[i].a;
    let Qi = object.geometry.faces[i].b;
    let Ri = object.geometry.faces[i].c;

    let P = new THREE.Vector3(object.geometry.vertices[Pi].x, object.geometry.vertices[Pi].y, object.geometry.vertices[Pi].z);
    let Q = new THREE.Vector3(object.geometry.vertices[Qi].x, object.geometry.vertices[Qi].y, object.geometry.vertices[Qi].z);
    let R = new THREE.Vector3(object.geometry.vertices[Ri].x, object.geometry.vertices[Ri].y, object.geometry.vertices[Ri].z);
    volumes += volumeOfT(P, Q, R);
  }

  let loadedObjectVolume = Math.abs(volumes);
  console.log(`The volume of the object is ${loadedObjectVolume}`);

  return Math.round(loadedObjectVolume);
};

export const threeMaterialSelector = (mesh) => {
  const phongMaterial = new THREE.MeshPhongMaterial( { ambient: 0x555555, color: 0x555555, specular: 0xffffff, shininess: 50, shading: THREE.SmoothShading } );
  const basicMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, opacity: 1, wireframe: true } );

  const materials = {
    phongMaterial,
    basicMaterial,
  };
  return materials;
};

export const threeNewGeometry = (geo) => {

  let geometry = {};

  switch (geo) {
    case 'box': {
      geometry = new THREE.BoxGeometry(20, 20, 20);
      break;
    }
    case 'cone': {
      geometry = new THREE.ConeGeometry(5, 20, 32);
      break;
    }
    case 'cylinder': {
      geometry = new THREE.CylinderGeometry(20, 20, 15, 64);
      break;
    }
    case 'sphere': {
      geometry = new THREE.SphereGeometry(5, 32, 32);
      break;
    }
    default: {
      geometry = new THREE.BoxGeometry(20, 20, 20);
      break;
    }
  }
  const material = new THREE.MeshLambertMaterial({ color: 0x3b240e });
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
};

export const threeTextGeometry = () => {
  const loader = new THREE.FontLoader();
  // const fontName = 'helvetiker';
  // const fontWeight = 'bold';

  let geometry;
  loader.load( '//raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
    geometry = new THREE.TextGeometry( 'Hello three.js!', {
      font: font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelSegments: 5
    });
  });
  const material = new THREE.MeshLambertMaterial({ color: 0x3b240e });
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
};

export const threeLoader = (scene, model) => {
  const loader = new THREE.ObjectLoader();
  loader.load(
    model,
    (obj) => {
      scene.add(obj);
    },
    (xhr) => {
      console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    (err) => {
      console.error( 'An error happened' );
    },
  );
  return scene;
};