import React, { Component } from 'react';
import './RecipeInfo.css';

class RecipeInfo extends Component {
  render() {
   const { title, culinary, description, printTime, printCapacity } = this.props;

    return (
      <div className="recipe-info">
        <span>Kitchen of origin: { culinary }</span>
        <h2>{ title }</h2>
        <span>Print Time: { printTime } minutes</span>
        {` | `}
        <span>Print Capacity: { printCapacity } percentage</span>
        <p className="para">{ description }</p>
      </div>
    );
  }
}

export default RecipeInfo;
