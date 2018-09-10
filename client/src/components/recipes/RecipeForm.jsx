import React from 'react';

import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

export default ({
  title,
  culinary,
  description,
  directions,
  recipeImage,
  printSettings,
  ingredient,

}) => {
  const options = [
    { label: 'SELECT INGREDIENT', value: 0 },
    { label: 'Chocolate Pure', value: 'Chocolate Pure' },
    { label: 'Chocolate Milk', value: 'Chocolate Milk' },
    { label: 'Chocolate White', value: 'Cholocate White' },
    { label: 'Chocolate Almond', value: 'Chocolate Almond' },
  ];

  return (
    <div className="recipe-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h2>Create a recipe</h2>
              <p>Add some information to start creating your custom food printing dish.</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={this.onChange}
                  error={errors.title}
                  info="A title for your created dish."
                />
                <TextFieldGroup
                  placeholder="Culinary"
                  name="culinary"
                  value={culinary}
                  onChange={this.onChange}
                  error={errors.culinary}
                  info="Country of Origin"
                />
                <TextAreaFieldGroup
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={this.onChange}      
                  error={errors.description}
                  info="Description for your created recipe"
                />
                <SelectListGroup
                  placeholder="Ingredient"
                  name="ingredient"
                  value={ingredient}
                  onChange={this.onChange}
                  options={options}
                  error={errors.ingredient}
                  info="Select Ingredient"
                />
                <input
                  type="file"
                  name="recipeImage"
                  onChange={this.onChange}
                />
                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Warning Message</strong> You should check in on some of those fields above.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
  )
}

// FIXME: Need eventhandler and parent callbacks