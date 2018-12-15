import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const styles = theme => ({

});

const RestaurantForm = ({
  displaySocialInputs,
  name,
  twitter,
  facebook,
  instagram,
  errors,
  onChangeCallback,
  onSubmitCallback,
  onSocialInputsToggleCallback,
  classes,
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
      <Grid container justify="center">
        <Grid item md={8}>
          <form onSubmit={onSubmit} className={classes.loginForm} noValidate autoComplete="off">
            <Typography variant="h3">Add A Restaurant Profile</Typography>
            <Typography variant="paragraph">Create a Restaurant Page to Promote your business.</Typography>
            <small className="d-block pb-3">* = required fields</small>
            <TextField
              className={classes.restaurantFormInput}
              variant="outlined"
              label="Restaurant Name"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              error={errors.name}
              helperText={errors ? errors.name : ''}
            />
            <Button type="submit" value="Submit" className={classes.restaurantFormButton}>Submit</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

RestaurantForm.propTypes = {
  name: PropTypes.string.isRequired,
  displaySocialInputs: PropTypes.bool.isRequired,
  twitter: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  errors: PropTypes.shape().isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RestaurantForm);
