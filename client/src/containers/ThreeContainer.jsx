import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getThreeScene, saveThreeScene } from '../actions/threeActions';


import ThreeScene from '../components/three/ThreeScene';

class ThreeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largerWindowSizeActive: false,
      scene: '',
    };
    this.onVolumeHandle = this.onVolumeHandle.bind(this);
  }

  componentDidMount() {
    // this.props.getThreeScene(this.props.match.params.id);
    // this.props.saveThreeScene(this.state.scene);
  }

  onVolumeHandle(vol) {
    const { onVolumeCallback } = this.props;
    onVolumeCallback(vol);
  }

  render() {
    const { recipe, cad, cadText } = this.props;
    return (
      <div className="three-container">
        <ThreeScene onVolumeHandle={this.onVolumeHandle} title={recipe.title} cad={cad} cadText={cadText} />
      </div>
    );
  }
}

ThreeContainer.propTypes = {
  getThreeScene: PropTypes.func.isRequired,
  saveThreeScene: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  three: state.three,
});

export default connect(mapStateToProps, { getThreeScene, saveThreeScene })(ThreeContainer);

// {this.state.largerWindowSizeActive ? "col-md-12" : "col-md-8"}
// get recipe from redux or passed down as props from recipe container?