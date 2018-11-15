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

const Register = ({
  name,
  email,
  password,
  password2,
  errors,
  onChangeCallback,
  onSubmitRegisterCallback
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
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your FPP account</p>
            <Form noValidate onSubmit={onSubmit}>
              <FormGroup>
                <Label for="">Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.name
                  })}
                />
              </FormGroup>

              <FormGroup>
                <Label for="">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.email
                  })}
                />
                <FormText color="muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">Password</Label>
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

              <FormGroup>
                <Label for="">Confirm Password</Label>
                <Input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password2
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

Register.propTypes = {
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default Register;
