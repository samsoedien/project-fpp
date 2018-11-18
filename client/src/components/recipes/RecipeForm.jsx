import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
  modal,
  onModalToggleCallback,
  onChangeCallback,
  onSubmitCallback,
}) => {
  const onModalToggle = () => {
    onModalToggleCallback();
  };

  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };


  return (
    <div className="recipe-form">
      <div className="modal-component">
        <Button color="danger" onClick={onModalToggle}>Create a Recipe</Button>
        <Modal isOpen={modal} toggle={onModalToggle}>
          <ModalHeader toggle={onModalToggle}>Modal Title</ModalHeader>
          <ModalBody>
            <Form onSubmit={onSubmit} noValidate>
              <FormGroup>
                <Label for=""></Label>
                <Input
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.title : ''}</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="" />
                <Input
                  name="culinary"
                  placeholder="Culinary"
                  value={culinary}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.culinary : ''}</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="" />
                <Input
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.description : ''}</FormText>
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
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onModalToggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={onModalToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
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
  modal: PropTypes.bool.isRequired,
  onModalToggleCallback: PropTypes.func.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};

export default RecipeForm;

    //TODO: Form over entire modal? Submit hander on save button. Need to search for examples
