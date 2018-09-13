import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';

const IngredientForm = ({
  name,
  errors,
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

  const Seasonaloptions = [
    { label: '* Select Seasonal Tag', value: 0 },
    { label: 'Birthday', value: 'Birthday' },
    { label: 'Christmas', value: 'Christmas' },
    { label: 'Eastern', value: 'Eastern' },
    { label: 'Valentine', value: 'Food Designer' },
    { label: 'Other', value: 'Other' },
  ];

  return (
    <div className="ingredient-form">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h2>Create a recipe</h2>
            <p>Add some information to start creating your custom food printing dish.</p>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
                error={errors.name}
                info="A created ingredient."
              />
              <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

IngredientForm.propTypes = {
  ingredient: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default IngredientForm;
