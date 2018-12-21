import React from 'react';
import PropTypes from 'prop-types';
import FileSaver from 'file-saver';
// import * as THREE from 'three';
// import { STLExporter } from 'three/STLExporter';
import THREE from '../../helpers/three';
import { Button } from '@material-ui/core';

const ThreeFileExporter = ({
  name,
  scene,
}) => {
  const onFileDownload = () => {
    const exporter = new THREE.STLExporter();
    let stlString = exporter.parse(scene); // Export the scene
    let blob = new Blob([stlString], { type: 'text/plain' }); // Generate Blob from the string
    let fileName = name.replace(/\W+/g, '-').toLowerCase(); // W converters nonalphanumeric characters e.g. &
    FileSaver.saveAs(blob, fileName + '.stl'); // Save the Blob to file.stl
  }
  return (
    <div className="three-file-exporter">
      <div className="container">
        <div className="position-absolute" style={{ bottom: '8px', right: '4px' }}>
          <Button variant="contained" color="primary" onClick={onFileDownload}>Download File (.STL)</Button>
        </div>
      </div>
    </div>
  );
};

ThreeFileExporter.propTypes = {
  name: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired,
};

export default ThreeFileExporter;
