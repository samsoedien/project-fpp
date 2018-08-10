
export const threeInit = (THREE) => {
  const width = this.mount.clientWidth;
  const height = this.mount.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
  camera.position.z = 50;
  camera.position.y = 12;

  const geometry = new THREE.BoxGeometry(12, 12, 12);
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

  /*  
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;
  */

  /**/

};


export const threeAnimate = () => {
  this.mesh.rotation.y += 0.004;
  this.scene.rotation.y += 0.002;

  this.frameId = window.requestAnimationFrame(this.animate);
  this.renderer.render(this.scene, this.camera);
};