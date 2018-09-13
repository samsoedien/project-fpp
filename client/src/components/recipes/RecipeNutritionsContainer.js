import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
//import NutritionItem from './NutritionItem';
//import { getNutritions } from '../../actions/ingredientActions'

class RecipeNutritionsContainer extends Component {
  render() {
    const { nutritions, loading } = this.props.ingredient;
    let nutritionItem;

    if (nutritions === null || loading) {
      nutritionItem = <Spinner />;
    } else {
      if (nutritions.length > 0) {
        nutritionItem = <NutritionItem nutritions={nutritions} />
        ));
      } else {
        nutritionItem = <h4>No Nutrition info added for this ingredient yet. Please click here to add nutrition values</h4>
      }
    }

    return (
      <div>

      </div>
    )
  }
}


export default connect(null)(RecipeNutritionsContainer);

//FIXME: Not tested yet/completed yet
