import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIngredients } from '../actions/ingredientActions';

import IngredientFormContainer from './IngredientFormContainer';
import IngredientList from '../components/ingredients/IngredientList';

class IngredientListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.filterListUpdate = this.filterListUpdate.bind(this);
  }

  componentDidMount() {
    const { getIngredients } = this.props;
    getIngredients();
  }

  filterListUpdate(value) {
    console.log(value);
    this.setState({
      filterText: value,
    });
  }

  render() {
    const { ingredient: { ingredients, loading }, auth } = this.props;
    const { filterText } = this.state;
    return (
      <div className="ingredient-list-container">
        <IngredientList
          ingredients={ingredients}
          loading={loading}
          filterText={filterText}
          filterUpdate={this.filterListUpdate}
        />
        {(auth.isAuthenticated) ? <IngredientFormContainer /> : null}
      </div>
    );
  }
}

IngredientListContainer.propTypes = {
  getIngredients: PropTypes.func.isRequired,
  ingredient: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
  auth: state.auth,
});

export default connect(mapStateToProps, { getIngredients })(IngredientListContainer);
