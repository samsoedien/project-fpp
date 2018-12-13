import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Button,
} from '@material-ui/core';


import RegisterFormAccountDetails from './RegisterFormAccountDetails';
import Pricing from '../layout/Pricing';

const styles = theme => ({
  registerPaper: {
    margin: '0 auto',
  },
  registerForm: {
    padding: '36px 16px',
    margin: '0 auto',
  },
  registerFormTitle: { padding: '6px 0' },
  registerFormText: {
    padding: '12px 0',
    textAlign: 'center',
  },
  registerFormSmall: {
    marginBottom: '6px',
    float: 'right',
  },
  registerFormInput: {
    marginBottom: '24px',
    width: '100%',
  },
  registerFormButton: {
    float: 'right',
  },
});

const Register = ({
  name,
  email,
  password,
  passwordConfirm,
  image,
  showPassword,
  onChangeCallback,
  onSubmitRegisterCallback,
  onShowPasswordCallback,
  errors,
  classes,
}) => {
  const onChangeHandle = e => {
    onChangeCallback(e);
  };

  const onSubmitRegisterHandle = () => {
    onSubmitRegisterCallback();
  };

  const onShowPasswordHandle = () => {
    onShowPasswordCallback();
  };

  return (
    <div className="register">
      <Container>
        <Row>
          <Col md="10">
            <Paper className={classes.registerPaper}>
              <RegisterFormAccountDetails
                name={name}
                email={email}
                password={password}
                passwordConfirm={passwordConfirm}
                image={image}
                showPassword={showPassword}
                onChangeHandle={onChangeHandle}
                onSubmitRegisterHandle={onSubmitRegisterHandle}
                onShowPasswordHandle={onShowPasswordHandle}
                errors={errors}
              />
            </Paper>
          </Col>
        </Row>

        <Row>
          <Col xs="8" md="6" lg="4">
            hi
          </Col>
        </Row>
      </Container>
      <Pricing />
    </div>
  );
};

Register.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  showPassword: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitRegisterCallback: PropTypes.func.isRequired,
  onShowPasswordCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Register);
