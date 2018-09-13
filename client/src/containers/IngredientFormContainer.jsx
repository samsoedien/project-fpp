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
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const ingredientData = {
      name: this.state.name,
    };
    this.props.createIngredient(ingredientData, this.props.history);
  }

  render() {
    const { name, errors } = this.state;
    return (
      <div className="ingredient-form-container">
        <IngredientForm
          name={name} 
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}  
        />
      </div>
    );
  }
}

IngredientFormContainer.propTypes = {
  ingredient: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
  errors: state.errors,
});

export default connect(mapStateToProps, { createIngredient })(withRouter(IngredientFormContainer));

//FIXME: Not tested yet