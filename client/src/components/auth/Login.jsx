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
  FormText
} from 'reactstrap';

const Login = ({
  email,
  password,
  errors,
  onChangeCallback,
  onSubmitLoginCallback
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
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your account</p>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.email
                  })}
                />
              </FormGroup>

              <FormGroup>
                <Label for="">Email</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password
                  })}
                />
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
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default Login;
