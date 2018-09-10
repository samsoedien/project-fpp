import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createRecipe } from '../../actions/recipeActions';

import RecipeForm from '../components/recipes/RecipeForm';

class CreateRecipe extends Component {
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
    const { user } = this.props.auth;

    const recipeData = {
      title: this.state.title,
      culinary: this.state.culinary,
      description: this.state.description,
      directions: this.state.directions,
      recipeImage: this.state.recipeImage,
      printSettings: this.state.printSettings,
      ingredient: this.state.ingredient,
      name: user.name,
      avatar: user.avatar,
    };

    this.props.createRecipe(recipeData, this.props.history);
  }

  render() {
    const { title, culinary, ingredient, description, errors } = this.state;

    const options = [
      { label: 'SELECT INGREDIENT', value: 0 },
      { label: 'Chocolate Pure', value: 'Chocolate Pure' },
      { label: 'Chocolate Milk', value: 'Chocolate Milk' },
      { label: 'Chocolate White', value: 'Cholocate White' },
      { label: 'Chocolate Almond', value: 'Chocolate Almond' },
    ];

    return (
      <div className="create-recipe-container">
        <RecipeForm
          title={title}
          culinary={culinary}
          description={description}
          directions={directions}
          recipeImage={recipeImage}
          printSettings={printSetttings}
          ingredient={ingredient}
        />
      </div>
    );
  }
}

CreateRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { createRecipe })(withRouter(CreateRecipe));
