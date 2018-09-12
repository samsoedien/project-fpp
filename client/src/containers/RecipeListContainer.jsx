import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipes } from '../actions/recipeActions';

import RecipeList from '../components/recipes/RecipeList';

class RecipeListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  componentDidMount() {
    this.props.getRecipes();
  }

  filterListUpdate = (value) => {
    console.log(value);
    this.setState({
      filterText: value,
    });
  }

  render() {
    const { recipes, loading } = this.props.recipe;
    const { filterText } = this.state;
    return (
      <div className="recipe-list-container">
        <RecipeList
          recipes={recipes}
          loading={loading}
          filterText={filterText}
          filterUpdate={this.filterListUpdate}
        />
      </div>
    );
  }
}

RecipeListContainer.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipes })(RecipeListContainer);
