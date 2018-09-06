import React, { Component } from 'react'
import axios from 'axios';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  fileUploadHandler = () => {
    axios
      .post('')

  }

  render() {
    return (
      <div className="">
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}></button>
      </div>
    )
  }
}