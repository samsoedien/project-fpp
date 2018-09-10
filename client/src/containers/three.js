const THREE = require('three');

global.THREE = THREE;
if (!window.addEventListener)
    window.addEventListener = () => { };
// require('three/examples/js/renderers/Projector');
require('three/examples/js/controls/OrbitControls.js')
require('three/examples/js/loaders/MTLLoader');
require('three/examples/js/loaders/OBJLoader');

export default THREE;
