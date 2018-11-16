import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

const IngredientForm = ({
  name,
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
    <div className="ingredient-form">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <h2>Create a recipe</h2>
            <p>
              Add some information to start creating your custom food printing
              dish.
            </p>
            <Form onSubmit={onSubmit} noValidate>
              <FormGroup>
                <Label for="">Ingredient Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Ingredient"
                  value={name}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.name : ''}</FormText>
              </FormGroup>
              <Input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
              />
            </Form>

            <div className="btn-group mb-4" role="group">
              <Link to="/add-nutritions" className="btn btn-light">
                <i className="fas fa-user-circle text-info mr-1" />
                Add Nutritions
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

IngredientForm.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default IngredientForm;
