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
  FormText
} from 'reactstrap';

const RestaurantForm = ({
  displaySocialInputs,
  name,
  twitter,
  facebook,
  instagram,
  errors,
  onChangeCallback,
  onSubmitCallback,
  onSocialInputsToggleCallback
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  return (
    <div className="profile-form">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <h2>Add A Restaurant Profile</h2>
            <p className="lead text-center">
              Create a Restaurant Page to Promote your business.
            </p>
            <small className="d-block pb-3">* = required fields</small>

            <Form onSubmit={onSubmit} noValidate>
              <FormGroup>
                <Label for="">Restaurant Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Restaurant Name"
                  value={name}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.name : ''}</FormText>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

RestaurantForm.propTypes = {
  displaySocialInputs: PropTypes.bool.isRequired,
  twitter: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired
};

export default RestaurantForm;
