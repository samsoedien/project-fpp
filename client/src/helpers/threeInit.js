import THREE from './three';

export const threeInit = () => {



  const init = (width, height) => {
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

  const animate = () => {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
    this.frameId = window.requestAnimationFrame(this.animate);
    return this.frameId;
  };

  init();
};


export const start = () => {
  this.mount.appendChild(this.renderer.domElement);
  if (!this.frameId) {
    this.frameId = requestAnimationFrame(this.animate);
  }
  //window.addEventListener('resize', this.onWindowResize, false);
};

export const stop = () => {
  this.mount.removeChild(this.renderer.domElement);
  cancelAnimationFrame(this.frameId);
  //window.removeEventListener('resize', this.onWindowResize, false);
};

export const renderScene = () => {
  this.renderer.render(this.scene, this.camera);
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