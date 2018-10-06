// const THREE = require('three');
import * as THREE from 'three';

global.THREE = THREE;
if (!window.addEventListener) window.addEventListener = () => { };

// require('three/examples/js/renderers/Projector');
require('three/examples/js/Detector');
require('three/examples/js/controls/OrbitControls');
require('three/examples/js/loaders/MTLLoader');
require('three/examples/js/loaders/OBJLoader');
require('three/examples/js/loaders/STLLoader');
require('three/examples/js/exporters/STLExporter');
require('three/examples/js/exporters/GLTFExporter');
//require('three/src/loaders/FontLoader');
require('three/examples/fonts/helvetiker_bold.typeface.json');

export default THREE;
