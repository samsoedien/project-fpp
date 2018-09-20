import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIngredient } from '../actions/ingredientActions';

import Ingredient from '../components/ingredients/Ingredient';

class IngredientContainer extends Component {
  componentDidMount() {
    this.props.getIngredient(this.props.match.params.id);
  }

  render() {
    const { ingredient, loading } = this.props.ingredient;
    return (
      <div className="ingredient-container">
        <Ingredient ingredient={ingredient} loading={loading} />
      </div>
    )
  }
}

IngredientContainer.propTypes = {
  getIngredient: PropTypes.func.isRequired,
  ingredient: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
});

export default connect(mapStateToProps, { getIngredient })(IngredientContainer);
