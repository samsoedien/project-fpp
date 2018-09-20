import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import Spinner from '../common/Spinner';

import NutritionCellData from './NutritionCellData';

const Nutrition = ({
  nutritions,
  isEditable,
  onChangeCallback,
  onSubmitCallback,
}) => {
 
  const onChange = (e) => {
    onChangeCallback(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback();
  };

  let nutritionItems;
  if (nutritions === null) {
    nutritionItems = <Spinner />;
  } else {
      if (nutritions.length > 0) {
        nutritionItems = nutritions
        .map(nutrition => (
          <tr>
            <th scope="row" className="text-left pl-5">{nutrition.type}</th>
            <td className="text-right pr-5">
            { isEditable
              ? <NutritionCellData value={nutrition.value} isEditable={isEditable} onChange={onChange}  />
              : <span>{isEmpty(nutrition.value) ? null : nutrition.value} </span>
            }
            </td>
          </tr>
        ));
      } else {
      nutritionItems = <h4>No Nutritions found...</h4>;
      }
  }

  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="text-muted text-left pl-5">Nutrition</th>
                <th scope="col" className="text-muted text-right pr-5">Value</th>
              </tr>
            </thead>
            <tbody>
              {nutritionItems}
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <div className="container">
        {isEditable ? <button onClick={onSubmit} className="btn btn-success btn-sm">Save Changes</button> : null}
      </div>
    </div>
  );
};

Nutrition.defaultProps = {
  isEditable: false,
}

Nutrition.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  nutritions: PropTypes.object.isRequired,
}

export default Nutrition;

//TODO: if authorized or possible to edit cells than change edit state else if prompt warning that the cells may not be changed.

//FIXME: add isEmpty function 