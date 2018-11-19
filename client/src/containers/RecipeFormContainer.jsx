import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createRecipe } from '../actions/recipeActions';

// import axios from 'axios';

import RecipeForm from '../components/recipes/RecipeForm';

class RecipeFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      culinary: '',
      description: '',
      directions: '',
      recipeImage: '',
      printSettings: '',
      ingredient: '',
      errors: {},
      modal: false,
    };
    this.onModalToggleCallback = this.onModalToggleCallback.bind(this);
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onModalToggleCallback() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  onChangeCallback(e) {
    switch (e.target.name) {
      case 'recipeImage':
        this.setState({ recipeImage: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmitCallback() {
    // const recipeData = {
    //   title: this.state.title,
    //   culinary: this.state.culinary,
    //   description: this.state.description,
    //   //directions: this.state.directions,
    //   recipeImage: this.state.recipeImage
    //   //printSettings: this.state.printSettings,
    //   //ingredient: this.state.ingredient,
    //   //name: user.name,
    //   //avatar: user.avatar,
    // };

    const recipeData = new FormData();
    recipeData.append('title', this.state.title);
    recipeData.append('culinary', this.state.culinary);
    recipeData.append('description', this.state.description);
    recipeData.append('image', this.state.recipeImage);

    this.props.createRecipe(recipeData, this.props.history);
  }

  render() {
    const {
      title,
      culinary,
      description,
      directions,
      recipeImage,
      printSettings,
      ingredient,
      errors,
      modal,
    } = this.state;
    return (
      <div className="create-recipe-container">
        <RecipeForm
          title={title}
          culinary={culinary}
          description={description}
          directions={directions}
          recipeImage={recipeImage}
          printSettings={printSettings}
          ingredient={ingredient}
          errors={errors}
          modal={modal}
          onModalToggleCallback={this.onModalToggleCallback}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

RecipeFormContainer.propTypes = {
  recipe: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createRecipe }
)(withRouter(RecipeFormContainer));
