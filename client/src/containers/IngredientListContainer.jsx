import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIngredients } from '../actions/ingredientActions';

import IngredientList from '../components/ingredients/IngredientList';
import NutritionsTable from '../components/ingredients/NutritionsTable';

class IngredientListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  componentDidMount() {
    this.props.getIngredients();
  }

  render() {
    const { ingredients, loading } = this.props.ingredient;
    const { filterText } = this.state;
    return (
      <div className="ingredient-list-container">
        <IngredientList ingredients={ingredients} filterText={filterText} loading={loading} />
        <NutritionsTable />
      </div>
    );
  }
}

IngredientListContainer.propTypes = {
  getIngredients: PropTypes.func.isRequired,
  ingredient: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
});

export default connect(mapStateToProps, { getIngredients })(IngredientListContainer);
