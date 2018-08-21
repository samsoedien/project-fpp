import React from 'react';

const RecipeNutritions = (props) => (
  <div className="recipe-nutritions">
    <div className="container">
      <table className="table">
        <tr>
          <td>Calories</td>
          <td>{props.kcal}</td>
        </tr>
        <tr>
          <td>Fats</td>
          <td>23 mg</td>
        </tr>
      </table>
    </div>
  </div>
);

export default RecipeNutritions;