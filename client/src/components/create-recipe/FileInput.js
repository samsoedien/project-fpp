import React, { Component } from 'react';
import axios from 'axios';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  fileSelectedHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  }

  fileUploadHandler = () => {
    axios.post('/image');
  }


  render() {
    return (
      <div>
        <form action="">
          <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
        </form>
      </div>
    )
  }
}
