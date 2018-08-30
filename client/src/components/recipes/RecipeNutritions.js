import React from 'react';

const RecipeNutritions = (props) => (
  <div className="recipe-nutritions">
    <div className="container mb-3">
      <h4>Nutrition Values</h4>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-primary active">
          <input type="radio" name="options" id="option1" autocomplete="off" checked /> Portion
        </label>
        <label className="btn btn-default">
          <input type="radio" name="options" id="option2" autocomplete="off" /> Per 100G
        </label>
      </div>
    </div>

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
);

export default RecipeNutritions;