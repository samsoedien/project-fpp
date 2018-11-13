import React from 'react';
import isEmpty from '../../utils/is-empty';

const ThreeNutritions = props => (
  <div className="recipe-nutritions">
    <div className="bg-light ml-4 p-3">
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-center pt-2">Nutrition Values</h4>
            <div
              className="btn-group btn-group-toggle p-3"
              data-toggle="buttons"
            >
              <label className="btn btn-primary active">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autocomplete="off"
                  checked
                />{' '}
                Portion
              </label>
              <label className="btn btn-default">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />{' '}
                Per 100G
              </label>
            </div>
          </div>

          <table className="table table-hover">
            <thead>
              <th scope="col" className="text-muted text-left pl-5">
                Nutrition
              </th>
              <th scope="col" className="text-muted text-right pr-5">
                Value
              </th>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-left pl-5">
                  Calories
                </th>
                <td className="text-right pr-5">
                  {isEmpty(props.kcal) ? (
                    <span>No nutrition data available.</span>
                  ) : (
                    <span>{props.kcal} kCal</span>
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left pl-5">
                  Fats
                </th>
                <td className="text-right pr-5">23 mg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default ThreeNutritions;
