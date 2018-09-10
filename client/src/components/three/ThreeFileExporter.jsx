import React, { Component } from 'react';

// import * as THREE from 'three';
// import { STLExporter } from 'three/STLExporter';
import FileSaver from 'file-saver';
import THREE from '../../containers/three';

class ThreeFileExporter extends Component {
  constructor(props) {
    super(props);

    this.onFileDownload = this.onFileDownload.bind(this);
  }

  onFileDownload() {
    const { scene, name } = this.props;
    console.log(scene);

    const exporter = new THREE.STLExporter();
    let stlString = exporter.parse(scene); // Export the scene
    let blob = new Blob([stlString], { type: 'text/plain' }); // Generate Blob from the string
    let fileName = name.replace(/\W+/g, '-').toLowerCase();   //W converters nonalphanumeric characters e.g. &
    FileSaver.saveAs(blob, fileName + '.stl'); //Save the Blob to file.stl
  }

  render() {
    return (
      <div className="container">
        <button className="three-file-exporter btn btn-primary mt-2" onClick={this.onFileDownload}>Download File (.STL)</button>
      </div>
    );
  }
}

export default ThreeFileExporter;
