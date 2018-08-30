import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

  filterUpdate(value) {
    this.setState({
      filterText: value,
    });
  }

  render() {
    const { recipes, loading } = this.props.recipe;
    return (
      <div className="recipe-list-container">
        <RecipeList recipes={recipes} loading={loading} filterText={this.state.filterText} />
      </div>
    );
  }
};

RecipeListContainer.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipes })(RecipeListContainer);
