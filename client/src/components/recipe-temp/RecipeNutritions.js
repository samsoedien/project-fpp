import React, { Component } from 'react';
import './RecipeNutritions.css';

export default class RecipeNutritions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    if (!this.state.isSelected) {
      this.setState({
        isSelected: true,
      });
      document.getElementById('nutrition-button').classList.add('nutrition-button--selected');
    } else {
      this.setState({
        isSelected: false,
      });
      document.getElementById('nutrition-button').classList.remove('nutrition-button--selected');
    }
    console.log(this.state.isSelected);
  }

  render() {
    const { energy, energyKcal, fats, carbs, proteins } = this.props;

    return (
      <div className="recipe-nutritions">
        <h2 className="nutrition-title">Nutrition Value</h2>
        <div className="nutrition-toggle">
          <button className="nutrition-button dish" onClick={this.onClickHandler}>This Recipe</button>
          <button className="nutrition-button 100gr" onClick={this.onClickHandler}>Per 100gr</button>
        </div>
        <ul className="nutritions-ul-types">
          <li>Energy (kJ)</li>
          <li>Energy (kCal)</li>
          <li>Fats</li>
          <li>Carbohydrates</li>
          <li>Proteins</li>
          <li>Allergies</li>
        </ul>
        <ul className="nutritions-ul-values">
          <li>{energy} kJ</li>
          <li>{energyKcal} kCal</li>
          <li>{fats} g</li>
          <li>{carbs} g</li>
          <li>{proteins} g</li>
          <li>Gluten</li>
        </ul>
      </div>
    );
  }
}
