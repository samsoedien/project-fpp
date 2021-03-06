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
      categories: '',
      specifications: '',
      description: '',
      settings: '',
      printTime: '',
      dimensions: '',
      cad: '',
      cadText: '',
      image: '',
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
    const {
      title,
      categories,
      specifications,
      description,
      settings,
      printTime,
      dimensions,
      cad,
      cadText,
      image,
    } = this.state;

    const recipeData = new FormData();
    recipeData.append('title', title);
    recipeData.append('categories', categories);
    recipeData.append('specifications', specifications);
    recipeData.append('description', description);
    recipeData.append('settings', settings);
    recipeData.append('printTime', printTime);
    recipeData.append('dimensions', dimensions);
    recipeData.append('cad', cad);
    recipeData.append('cadText', cadText);
    recipeData.append('image', image);

    const { createRecipe, history } = this.props;
    createRecipe(recipeData, history);
  }

  render() {
    const {
      title,
      categories,
      specifications,
      description,
      settings,
      printTime,
      dimensions,
      cad,
      cadText,
      image,
      ingredient,
      errors,
    } = this.state;
    return (
      <div className="recipe-form-container">
        <RecipeForm
          title={title}
          categories={categories}
          specifications={specifications}
          description={description}
          settings={settings}
          printTime={printTime}
          dimensions={dimensions}
          cad={cad}
          cadText={cadText}
          image={image}
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
