import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createIngredient } from '../../actions/ingredientActions';

import TextFieldGroup from '../common/TextFieldGroup';

class IngredientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const ingredientData = {
      name: this.state.name,
    };

    this.props.createIngredient(ingredientData, this.props.history);
  }

  render() {
    const { name, errors } = this.state;
    return (
      <div className="create-recipe">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h2>Create a recipe</h2>
              <p>Add some information to start creating your custom food printing dish.</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="A created ingredient."
                />
                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

IngredientForm.propTypes = {
  ingredient: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
  errors: state.errors,
});

export default connect(mapStateToProps, { createIngredient })(withRouter(IngredientForm));
