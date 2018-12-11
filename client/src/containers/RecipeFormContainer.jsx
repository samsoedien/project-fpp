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
      cuisine: '',
      description: '',
      directions: '',
      image: '',
      settings: '',
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
      case 'image':
        this.setState({ image: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmitCallback() {
    // const recipeData = {
    //   title: this.state.title,
    //   cuisine: this.state.cuisine,
    //   description: this.state.description,
    //   //directions: this.state.directions,
    //   image: this.state.image
    //   //settings: this.state.settings,
    //   //ingredient: this.state.ingredient,
    //   //name: user.name,
    //   //avatar: user.avatar,
    // };
    const { title, cuisine, description } = this.state;
    const recipeData = {
      title,
      cuisine,
      description,
    };

    // const recipeData = new FormData();
    // recipeData.append('title', this.state.title);
    // recipeData.append('cuisine', this.state.cuisine);
    // recipeData.append('description', this.state.description);
    // recipeData.append('image', this.state.image);
    const { createRecipe, history } = this.props;
    createRecipe(recipeData, history);
  }

  render() {
    const {
      title,
      cuisine,
      description,
      directions,
      image,
      settings,
      ingredient,
      errors,
    } = this.state;
    return (
      <div className="recipe-form-container">
        <RecipeForm
          title={title}
          cuisine={cuisine}
          description={description}
          directions={directions}
          image={image}
          settings={settings}
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
  createRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  errors: state.errors,
});

export default connect(mapStateToProps, { createRecipe })(withRouter(RecipeFormContainer));
