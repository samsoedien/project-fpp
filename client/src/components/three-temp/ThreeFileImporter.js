import React, { Component } from 'react';
import './ThreeFileImporter.css';

import { OBJLoader } from 'three/OBJLoader';
import { MTLLoader } from 'three/MTLLoader';
import { STLLoader } from 'three/STLLoader';

import MODEL from './utah-teapot.json';

class ThreeFileImporter extends Component {
  constructor(props) {
    super(props);

    this.onDragOverHandler = this.onDragOverHandler.bind(this);
    this.onDragLeaveHandler = this.onDragLeaveHandler.bind(this);
    this.onDragEndHandler = this.onDragEndHandler.bind(this);

    this.fileLoader = this.fileLoader.bind(this);
  }

  onDragOverHandler(event) {
    event.preventDefault();
  }

  onDragLeaveHandler(event) {
    event.preventDefault();
  }

  onDragEndHandler(event) {
    event.preventDefault();
  }


  fileLoader() {
    const loader = new THREE.ObjectLoader();
    loader.load(
    	MODEL,
      function (obj) {
    		this.scene.add(obj);
    	},
    	function (xhr) {
    		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    	},
    	function (err) {
    		console.error( 'An error happened' );
    	}
    );
  }


  render() {
    return (
      <div className="three-file-importer">
        <form className="" method="post">
          <input type="file" />
          <label
            htmlFor="fileInput"
            onDragOver={this.onDragOverHandler}
            onDragLeave={this.onDragLeaveHandler}
            onDragEnd={this.onDragEndHandler}
          >
            <span>filename</span>
          </label>
        </form>
      </div>
    );
  }
}

export default ThreeFileImporter;
