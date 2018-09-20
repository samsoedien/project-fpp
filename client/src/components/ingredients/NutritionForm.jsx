import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NutritionsTable from './NutritionsTable';

const NutritionForm = ({
  errors,
  disabled, 
  kcal,
  onCheckCallback,
  onChangeCallback,
  onSubmitCallback,
}) => {
  const onCheck = () => {
    onCheckCallback();
  };

  const onChange = (e) => {
    onChangeCallback(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback();
  };

  return (
    <div className="nutrition-form">
      <NutritionsTable isEditable={true}/>
    </div>
  );
};

export default NutritionForm;
