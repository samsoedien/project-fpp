import React, { Component } from 'react';
import './ThreeFileImporter.css';
import THREE from '../../helpers/three';
import { threeLoader } from '../../helpers/threeHelpers';

// import MODELJSON from '../../assets/models/utah-teapot.json';
import MODEL from '../../assets/models/dome.stl';

class ThreeFileImporter extends Component {
  constructor(props) {
    super(props);

    this.onDragOverHandler = this.onDragOverHandler.bind(this);
    this.onDragLeaveHandler = this.onDragLeaveHandler.bind(this);
    this.onDragEndHandler = this.onDragEndHandler.bind(this);
    this.onClick = this.onClick.bind(this);
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

  onClick() {
    threeLoader(this.props.scene, MODEL);
    console.log(threeLoader);
    this.props.sceneCallback(threeLoader);
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
          <button onClick={this.onClick}>Load Model</button>
        </form>
      </div>
    );
  }
}

export default ThreeFileImporter;
