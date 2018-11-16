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

const Register = ({
  name,
  email,
  password,
  passwordConfirm,
  onChangeCallback,
  onSubmitRegisterCallback,
  errors
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitRegisterCallback();
  };

  return (
    <div className="register">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <h1 className="display-4 text-center">Signup</h1>
            <p className="lead text-center">Create your FPP account</p>
            <Form onSubmit={onSubmit} noValidate>
              <FormGroup>
                <Label for="">Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.name : ''}</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.email : ''}</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChange}
                />
                <FormText color="danger">
                  {errors ? errors.password : ''}
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">Confirm Password</Label>
                <Input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  value={passwordConfirm}
                  onChange={onChange}
                />
                <FormText color="danger">
                  {errors ? errors.passwordConfirm : ''}
                </FormText>
              </FormGroup>

              <Input type="submit" className="btn btn-info btn-block mt-4" />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Register.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default Register;
