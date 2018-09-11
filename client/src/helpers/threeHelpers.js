// export const threeDetector = () => {
//   if (Detector.webgl) {
//     // Initiate function or other initializations here
//   } else {
//     let warning = Detector.getWebGLErrorMessage();
//     document.getElementById('container').appendChild(warning);
//   }
// };

export const threeInit = (THREE) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  let mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();
  return mesh;
};

export const threeInitialise = (THREE) => {
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
  const material = new THREE.MeshLambertMaterial({ color: '#0x3b240e', wireframe: false });
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

export const threeCalcVol = (THREE, object) => {
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
