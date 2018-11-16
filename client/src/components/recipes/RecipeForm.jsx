import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap';

const RecipeForm = ({
  title,
  culinary,
  description,
  directions,
  recipeImage,
  printSettings,
  ingredient,
  errors,
  onChangeCallback,
  onSubmitCallback
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };
  return (
    <div className="recipe-form">
      <div className="recipe-modal">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#recipeModal"
        >
          Create New Recipe
        </button>

        <div
          className="modal fade"
          id="recipeModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="recipeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="recipeModalLabel">
                  Create New Recipe
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div role="tabpanel">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="active" role="presentation">
                      <a
                        href="#formTab"
                        aria-controls="formTab"
                        role="tab"
                        data-toggle="tab"
                      >
                        Recipe Info
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#uploadTab"
                        aria-controls="uploadTab"
                        role="tab"
                        data-toggle="tab"
                      >
                        Upload CAD model
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="formTab"
                      role="tabpanel"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 m-auto">
                            <h2>Create a recipe</h2>
                            <p>
                              Add some information to start creating your custom
                              food printing dish.
                            </p>
                            <Form onSubmit={onSubmit} noValidate>
                              <FormGroup>
                                <Label for="" />
                                <Input
                                  type="text"
                                  name="title"
                                  placeholder="Title"
                                  value={title}
                                  onChange={onChange}
                                  className={classnames(
                                    'form-control form-control-lg',
                                    {
                                      'is-invalid': errors.title
                                    }
                                  )}
                                />
                                <FormText color="muted">
                                  Title for your dish.
                                </FormText>
                              </FormGroup>

                              <FormGroup>
                                <Label for="" />
                                <Input
                                  type="text"
                                  name="culinary"
                                  placeholder="Culinary"
                                  value={culinary}
                                  onChange={onChange}
                                  className={classnames(
                                    'form-control form-control-lg',
                                    {
                                      'is-invalid': errors.culinary
                                    }
                                  )}
                                />
                                <FormText color="muted">
                                  Country of Origin.
                                </FormText>
                              </FormGroup>

                              <FormGroup>
                                <Label for="" />
                                <Input
                                  type="text"
                                  name="description"
                                  placeholder="Description"
                                  value={description}
                                  onChange={onChange}
                                  className={classnames(
                                    'form-control form-control-lg',
                                    {
                                      'is-invalid': errors.description
                                    }
                                  )}
                                />
                                <FormText color="muted">
                                  Description for your created recipe.
                                </FormText>
                              </FormGroup>

                              <Input
                                type="file"
                                name="recipeImage"
                                onChange={onChange}
                              />
                              <Input
                                type="submit"
                                value="Submit"
                                className="btn btn-info btn-block mt-4"
                              />
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane active"
                      id="uploadTab"
                      role="tabpanel"
                    >
                      <span>No content yet</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeForm.propTypes = {
  title: PropTypes.string.isRequired,
  culinary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  directions: PropTypes.array.isRequired,
  recipeImage: PropTypes.object.isRequired,
  printSettings: PropTypes.string.isRequired,
  ingredient: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired
};

export default RecipeForm;

//TODO: Form over entire modal? Submit hander on save button. Need to search for examples
