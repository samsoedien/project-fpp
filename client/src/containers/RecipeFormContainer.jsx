import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createRecipe } from '../actions/recipeActions';

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
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    const recipeData = {
      title: this.state.title,
      culinary: this.state.culinary,
      description: this.state.description,
      //directions: this.state.directions,
      //recipeImage: this.state.recipeImage,
      //printSettings: this.state.printSettings,
      //ingredient: this.state.ingredient,
      //name: user.name,
      //avatar: user.avatar,
    };
    this.props.createRecipe(recipeData, this.props.history);
  }

  render() {
    const { title, culinary, description, directions, recipeImage, printSettings, ingredient, errors } = this.state;
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
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

RecipeFormContainer.propTypes = {
  recipe: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  errors: state.errors,
});

export default connect(mapStateToProps, { createRecipe })(withRouter(RecipeFormContainer));
