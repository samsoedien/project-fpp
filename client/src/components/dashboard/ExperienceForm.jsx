import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

const ExperienceForm = ({
  errors,
  disabled,
  company,
  title,
  location,
  from,
  to,
  current,
  description,
  onCheckCallback,
  onChangeCallback,
  onSubmitCallback
}) => {
  const onCheck = () => {
    onCheckCallback();
  };

  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  return (
    <div className="experience-form">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Experience</h1>
            <p className="lead text-center">
              Add any job or position that you have had in the past or current
            </p>
            <small className="d-block pb-3">* = required fields</small>

            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="">Company</Label>
                <Input
                  type="text"
                  name="company"
                  placeholder="* Company"
                  value={company}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.company
                  })}
                />
              </FormGroup>

              <FormGroup>
                <Label for="">Job Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="* Job title"
                  value={title}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.title
                  })}
                />
              </FormGroup>

              <FormGroup>
                <Label for="">Location</Label>
                <Input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={location}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.location
                  })}
                />
              </FormGroup>

              <FormGroup>
                <Label for="">From Date</Label>
                <Input
                  type="date"
                  name="from"
                  value={from}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.from
                  })}
                />
              </FormGroup>

              <FormGroup>
                <Label for="">To Date</Label>
                <Input
                  type="date"
                  name="to"
                  value={to}
                  onChange={onChange}
                  disabled={disabled ? 'disabled' : ''}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.to
                  })}
                />
              </FormGroup>

              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="current"
                  value={current}
                  checked={current}
                  onChange={onCheck}
                  id="current"
                />
                <label htmlFor="current" className="form-check-label">
                  Current Job
                </label>
              </div>

              <FormGroup>
                <Label for="">Job description</Label>
                <Input
                  type="type"
                  name="description"
                  placeholder="Job Description"
                  value={description}
                  onChange={onChange}
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.description
                  })}
                />
                <FormText color="muted">
                  Tell us about the the position.
                </FormText>
              </FormGroup>

              <Input
                type="submit"
                value="Submit"
                className="btn-info btn-block mt-4"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ExperienceForm.propTypes = {
  errors: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  current: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  onCheckCallback: PropTypes.func.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired
};

export default ExperienceForm;
