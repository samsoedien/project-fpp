import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getIngredient } from '../actions/ingredientActions';

import Ingredient from '../components/ingredients/Ingredient';

class IngredientContainer extends Component {
  componentDidMount() {
    const { getIngredient, match } = this.props;
    getIngredient(match.params.id);
  }

  render() {
    const { ingredient, loading } = this.props;
    return (
      <div className="ingredient-container">
        <Ingredient ingredient={ingredient} loading={loading} />
      </div>
    );
  }
}

IngredientContainer.propTypes = {
  getIngredient: PropTypes.func.isRequired,
  ingredient: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
});

export default connect(mapStateToProps, { getIngredient })(IngredientContainer);
