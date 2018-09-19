import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getThreeScene, saveThreeScene } from '../actions/threeActions';


import ThreeEditor from '../components/three/ThreeEditor';

class ThreeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largerWindowSizeActive: false,
      scene: '',
      title: 'editor_file',
      ingredient: 'chocolate',
    };
  }
  
  componentDidMount() {
    //this.props.getThreeScene(this.props.match.params.id);
  }

  render() {
    const { title, ingredient } = this.state; // Temp solution
    return (
      <div className="three-container">
        <ThreeEditor title={title} ingredient={ingredient} />
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