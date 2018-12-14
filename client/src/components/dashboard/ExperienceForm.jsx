import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
  TextField,
} from '@material-ui/core';

const styles = theme => ({
  experienceFormInput: {
    margin: '16px 0',
  },
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
      <Grid container justify="center">
        <Grid item xs={10} sm={8} md={6}>
          <Button component={Link} to="/dashboard">Go Back</Button>
          <form onSubmit={onSubmit} className={classes.experienceForm} noValidate autoComplete="off">
            <Typography variant="h4">Add Experience</Typography>
            <Typography variant="paragraph">Add any job or position that you have had in the past or current</Typography>
            <TextField
              className={classes.experienceFormInput}
              variant="outlined"
              fullWidth
              label="Business"
              type="text"
              name="company"
              value={company}
              onChange={onChange}
              error={errors.company}
              helperText={errors ? errors.company : ''}
            />
            <TextField
              className={classes.experienceFormInput}
              variant="outlined"
              fullWidth
              label="Job Title"
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              error={errors.title}
              helperText={errors ? errors.title : ''}
            />
            <TextField
              className={classes.experienceFormInput}
              variant="outlined"
              fullWidth
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
        </Grid>
      </Grid>
    </div >
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
