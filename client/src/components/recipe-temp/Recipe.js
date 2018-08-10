import React, { Component } from 'react';
import './Recipe.css';
import RecipeHeader from './RecipeHeader';
import RecipeInfo from './RecipeInfo';
import RecipeNutrition from './RecipeNutritions';
import ThreeContainer from '../three/ThreeContainer';

export default class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {
        title: 'Fruit Dessert',
        culinary: 'french',
        description: 'An appetizer dish made from a glace thin shell, with filled fresh fruits. A main course dish served with a food printed shell of beef meat. With a mash potato filling in the inside. Using fresh vegetable garnish of coleslaw, mushrooms and fried onions. Seasoned with seasalt and pepper.',
        printTime: 10,
        printCapacity: 60,
        ingredients: {
          type: 'chocolate',
          energy: 2443,
          energyKcal: 584,
          fats: 43.2,
          carbs: 35.2,
          proteins: 7.8,
        },
      },
    };
  }

  render() {
    const { recipe } = this.state;

    return (
      <div className="recipe">
        <RecipeHeader />
        <div>
          <ThreeContainer width="800" height="360" title={recipe.title} />
          <RecipeNutrition
            energy={this.state.recipe.ingredients.energy}
            energyKcal={this.state.recipe.ingredients.energyKcal}
            fats={this.state.recipe.ingredients.fats}
            carbs={this.state.recipe.ingredients.carbs}
            proteins={this.state.recipe.ingredients.proteins}
          />
        </div>
        <div className='container' />
      </div>
    );
  }
}
