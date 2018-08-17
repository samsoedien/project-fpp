import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { createRecipe } from '../../actions/recipeActions';

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredient: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const recipeData = {
      title: this.state.title,
      ingredient: this.state.ingredient,
    };

    this.props.createRecipe(recipeData, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="create-recipe">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h2>Create a recipe</h2>
              <p>Add some information to start creating your custom food printing dish.</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                  info="A title for your created dish."
                />
                <TextFieldGroup
                  placeholder="Ingredient"
                  name="ingredient"
                  value={this.state.ingredient}
                  onChange={this.onChange}
                  error={errors.ingredient}
                  info="The used ingredient for your created dish."
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

CreateRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  errors: state.errors,
});

export default connect(mapStateToProps, { createRecipe })(withRouter(CreateRecipe));
