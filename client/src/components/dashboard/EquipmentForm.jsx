import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap';

const styles = theme => ({

});

const ExperienceForm = ({
  company,
  title,
  location,
  from,
  to,
  current,
  description,
  onCheckCallback,
  onChangeCallback,
  onSubmitCallback,
  disabled,
  errors
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

            <Form onSubmit={onSubmit} noValidate>
              <FormGroup>
                <Label for="">Company</Label>
                <Input
                  name="company"
                  placeholder="* Company"
                  value={company}
                  onChange={onChange}
                />
                <FormText color="danger">
                  {errors ? errors.company : ''}
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">Job Title</Label>
                <Input
                  name="title"
                  placeholder="* Job title"
                  value={title}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.title : ''}</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">Location</Label>
                <Input
                  name="location"
                  placeholder="Location"
                  value={location}
                  onChange={onChange}
                />
                <FormText color="danger">
                  {errors ? errors.location : ''}
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">From Date</Label>
                <Input
                  type="date"
                  name="from"
                  value={from}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.from : ''}</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">To Date</Label>
                <Input
                  type="date"
                  name="to"
                  value={to}
                  onChange={onChange}
                  disabled={disabled ? 'disabled' : ''}
                />
                <FormText color="danger">{errors ? errors.to : ''}</FormText>
              </FormGroup>

              <div className="form-check mb-4">
                <Input
                  type="checkbox"
                  name="current"
                  value={current}
                  checked={current}
                  onChange={onCheck}
                  id="current"
                />
                <Label for="current">Current Job</Label>
              </div>

              <FormGroup>
                <Label for="">Job description</Label>
                <Input
                  name="description"
                  placeholder="Job Description"
                  value={description}
                  onChange={onChange}
                />
                <FormText color="muted">
                  Tell us about the the position.
                </FormText>
                <FormText color="danger">
                  {errors ? errors.discription : ''}
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
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  onCheckCallback: PropTypes.func.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  errors: PropTypes.func.isRequired,
};

export default withStyles(styles)(ExperienceForm);
