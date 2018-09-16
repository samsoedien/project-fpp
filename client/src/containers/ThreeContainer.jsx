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
  }
  
  componentDidMount() {
    //this.props.getThreeScene(this.props.match.params.id);
    this.props.saveThreeScene(this.state.scene);
  }

  render() {
    const { title, ingredient } = this.props.recipe;
    return (
      <div className="three-container">
        <ThreeScene title={title} ingredient={ingredient} />
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