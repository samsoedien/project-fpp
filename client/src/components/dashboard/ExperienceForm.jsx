import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  TextField,
} from '@material-ui/core';

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
  errors,
  classes,
}) => {
  // const onCheck = () => {
  //   onCheckCallback();
  // };

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
            <Button component={Link} to="/dashboard">Go Back</Button>
            <form onSubmit={onSubmit} className={classes.loginForm} noValidate autoComplete="off">
              <Typography variant="h4">Add Experience</Typography>
              <Typography variant="paragraph">Add any job or position that you have had in the past or current</Typography>
              <TextField
                className={classes.loginFormInput}
                variant="outlined"
                label="Business"
                type="text"
                name="company"
                value={company}
                onChange={onChange}
                error={errors.company}
                helperText={errors ? errors.company : ''}
              />
              <TextField
                className={classes.loginFormInput}
                variant="outlined"
                label="Job Title"
                type="text"
                name="title"
                value={title}
                onChange={onChange}
                error={errors.title}
                helperText={errors ? errors.title : ''}
              />
              <TextField
                className={classes.loginFormInput}
                variant="outlined"
                label="Location"
                type="text"
                name="location"
                value={location}
                onChange={onChange}
                error={errors.location}
                helperText={errors ? errors.location : ''}
              />

              {/* <FormGroup>
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
              </FormGroup> */}
              <Button variant="contained" color="primary" type="submit" value="Submit" className={classes.experienceFormButton}>Submit</Button>
            </form>
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
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ExperienceForm);
