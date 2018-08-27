import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import RecipeItem from './RecipeItem';
import { getRecipes } from '../../actions/recipeActions';

import SearchFilter from '../layout/SearchFilter';

class Recipes extends Component {
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
    let recipeItems;

    if (recipes === null || loading) {
      recipeItems = <Spinner />;
    } else {
      if (recipes.length > 0) {
        recipeItems = recipes
          .filter(recipe => {
            // remove names that do not match current filter text
            return recipe.title.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
          })
          .map(recipe => (
            <RecipeItem key={recipe._id} recipe={recipe} />
          ));
      } else {
        recipeItems = <h4>No Recipes found...</h4>;
      }
    }
    return (
      <div className="recipes">

        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </section>

        <SearchFilter filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />

        <div className="container">
          <div className="row">
            {recipeItems}
          </div>
        </div>

        <Link to="/create-recipe" className="btn btn-lg btn-info">
          Create Recipe
        </Link>
      </div>
    );
  }
};

Recipes.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipes })(Recipes);
