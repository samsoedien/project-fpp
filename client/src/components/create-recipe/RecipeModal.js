import React from 'react';
import RecipeForm from './RecipeForm';

import ImageUpload from './ImageUpload';

const RecipeModal = () => {
  return (
    <div className="recipe-modal">
      <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#recipeModal">
        Create New Recipe
      </button>

      <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="recipeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="recipeModalLabel">Create New Recipe</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div role="tabpanel">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="active" role="presentation">
                    <a href="#formTab" aria-controls="formTab" role="tab" data-toggle="tab">Recipe Info</a>
                  </li>
                  <li role="presentation">
                    <a href="#uploadTab" aria-controls="uploadTab" role="tab" data-toggle="tab">Upload CAD model</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="formTab" role="tabpanel">
                    <RecipeForm />
                  </div>
                  <div className="tab-pane active" id="uploadTab" role="tabpanel">
                    Upload Tab
                    <ImageUpload />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RecipeModal;
