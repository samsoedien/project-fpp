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

const Login = ({
  email,
  password,
  onChangeCallback,
  onSubmitLoginCallback,
  errors
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitLoginCallback();
  };

  return (
    <div className="login">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <h1 className="display-4 text-center">Login</h1>
            <p className="lead text-center">Sign in to your account</p>
            <Form onSubmit={onSubmit} noValidate>
              <FormGroup>
                <Label for="">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.email : ''}</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">Email</Label>
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
              <Input type="submit" className="btn btn-info btn-block mt-4" />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default Login;
