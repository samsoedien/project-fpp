import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createRecipe } from '../../actions/recipeActions';

import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

import FileInput from './FileInput';

import RecipeModal from './RecipeModal';

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredient: '',
      description: '',
      recipeImage: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    switch (e.target.name) {
      case 'recipeImage':
        this.setState({ recipeImage: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const recipeData = {
      title: this.state.title,
      ingredient: this.state.ingredient,
      description: this.state.description,
      recipeImage: this.state.recipeImage,
    };

    this.props.createRecipe(recipeData, this.props.history);
  }

  render() {
    const { title, ingredient, description, errors } = this.state;

    const options = [
      { label: 'SELECT INGREDIENT', value: 0 },
      { label: 'Chocolate Pure', value: 'Chocolate Pure' },
      { label: 'Chocolate Milk', value: 'Chocolate Milk' },
      { label: 'Chocolate White', value: 'Cholocate White' },
      { label: 'Chocolate Almond', value: 'Chocolate Almond' },
    ];

    return (
      <div className="create-recipe">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h2>Create a recipe</h2>
              <p>Add some information to start creating your custom food printing dish.</p>
              <form onSubmit={this.onSubmit} >
                <TextFieldGroup
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={this.onChange}
                  error={errors.title}
                  info="A title for your created dish."
                />
                <TextAreaFieldGroup 
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={this.onChange}      
                  error={errors.description}
                  info="Description for your created recipe"
                />
                <SelectListGroup
                  placeholder="Ingredient"
                  name="ingredient"
                  value={ingredient}
                  onChange={this.onChange}
                  options={options}
                  error={errors.ingredient}
                  info="Select Ingredient"
                />
                <input
                  type="file"
                  name="recipeImage"
                  onChange={this.onChange}
                />
                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Warning Message</strong> You should check in on some of those fields above.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <RecipeModal />
      </div>
    );
  }
}

CreateRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  errors: state.errors,
});

export default connect(mapStateToProps, { createRecipe })(withRouter(CreateRecipe));
