import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getIngredient } from '../actions/ingredientActions';

import NutritionContainer from './NutritionContainer';
import Ingredient from '../components/ingredients/Ingredient';

class IngredientContainer extends Component {
  componentDidMount() {
    this.props.getIngredient(this.props.match.params.id);
  }

  render() {
    const { ingredient, loading } = this.props;
    return (
      <div className="ingredient-container">
        <Ingredient ingredient={ingredient} loading={loading} />
        {/* <NutritionContainer nutritions={ingredient.nutritions} /> */}
      </div>
    );
  }
}

IngredientContainer.propTypes = {
  getIngredient: PropTypes.func.isRequired,
  ingredient: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
});

export default connect(mapStateToProps, { getIngredient })(IngredientContainer);
