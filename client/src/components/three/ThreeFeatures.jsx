import React from 'react';
import PropTypes from 'prop-types';

const ThreeFeatures = ({
  onWireframeToggleCallback,
}) => {
  const onWireframeToggle = () => {
    onWireframeToggleCallback();
  };

  // const ingredientSelector = () => {
  //   const phongMaterial = new THREE.MeshPhongMaterial( { ambient: 0x555555, color: 0x555555, specular: 0xffffff, shininess: 50, shading: THREE.SmoothShading } );
  //   const basicMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, opacity: 1, wireframe: true } );
    
  //   myMesh.material = phongMaterial;
    
  //   myMesh.material = basicMaterial;  
  // ;}

  return (
    <div className="three-features">
      <div className="container">
        <div className="position-absolute">
          <button onClick={onWireframeToggle} className="btn btn-primary btn-sm">Wireframe</button>
        </div>
      </div> 
    </div>
  );
};

ThreeFeatures.propTypes = {
  onWireframeToggleCallback: PropTypes.func.isRequired,
};

export default ThreeFeatures;




// phongMaterial = new THREE.MeshPhongMaterial( { ambient: 0x555555, color: 0x555555, specular: 0xffffff, shininess: 50, shading: THREE.SmoothShading } );
// basicMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, opacity: 1, wireframe: true } );

// myMesh.material = phongMaterial;

// myMesh.material = basicMaterial;