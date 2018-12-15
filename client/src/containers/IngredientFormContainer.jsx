import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createIngredient } from '../actions/ingredientActions';

import IngredientForm from '../components/ingredients/IngredientForm';

class IngredientFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
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

  onSubmitCallback(e) {
    const { name, image } = this.state;
    const ingredientData = new FormData();
    ingredientData.append('name', name);
    ingredientData.append('image', image);

    const { createIngredient, history } = this.props;
    createIngredient(ingredientData, history);
  }

  render() {
    const { name, image, errors } = this.state;
    return (
      <div className="ingredient-form-container">
        <IngredientForm
          name={name}
          image={image}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

IngredientFormContainer.propTypes = {
  createIngredient: PropTypes.func.isRequired,
  ingredient: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
  errors: state.errors,
});

export default connect(mapStateToProps, { createIngredient })(withRouter(IngredientFormContainer));
