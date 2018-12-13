import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@material-ui/core';

const styles = theme => ({
  profileFormInput: {
    margin: '12px 0',
  },
});

const ProfileForm = ({
  updateProfile,
  displaySocialInputs,
  handle,
  profession,
  location,
  bio,
  twitter,
  facebook,
  instagram,
  errors,
  onChangeCallback,
  onSubmitCallback,
  onToggleDisplayInputs,
  isOpen,
  classes,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  const onDisplayInputs = () => {
    onToggleDisplayInputs();
  };

  let socialInputs;
  if (displaySocialInputs) {
    socialInputs = (
      <div>
        <TextField
          className={classes.profileFormInput}
          variant="outlined"
          fullWidth
          label="Twitter URL"
          type="text"
          name="twitter"
          value={twitter}
          onChange={onChange}
          error={errors.twitter}
          helperText={errors ? errors.twitter : ''}
        />
        <TextField
          className={classes.profileFormInput}
          variant="outlined"
          fullWidth
          label="Facebook URL"
          type="text"
          name="facebook"
          value={facebook}
          onChange={onChange}
          error={errors.facebook}
          helperText={errors ? errors.facebook : ''}
        />
        <TextField
          className={classes.profileFormInput}
          variant="outlined"
          fullWidth
          label="Instagram URL"
          type="text"
          name="instagram"
          value={instagram}
          onChange={onChange}
          error={errors.instagram}
          helperText={errors ? errors.instagram : ''}
        />
      </div>
    );
  }

  const options = [
    { label: 'Pastry Chef', value: 'Pastry Chef' },
    { label: 'Chef de Cuisine', value: 'Chef de Cuisine' },
    { label: 'Sous Chef', value: 'Sous Chef' },
    { label: 'Cook', value: 'Cook' },
    { label: 'Food Designer', value: 'Food Designer' },
    { label: 'Food Scientist', value: 'Food Scientist' },
    { label: 'Student/Intern', value: 'Student/Intern' },
    { label: 'Other', value: 'Other' }
  ];
  // const selectOptions = options.map(option => (
  //   <option key={option.label} value={option.value}>
  //     {option.label}
  //   </option>
  // ));

  return (
    <div className="profile-form">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <form onSubmit={onSubmit} className={classes.profileForm} noValidate autoComplete="off">
              {!updateProfile ? (
                <Typography variant="h3" className={classes.profileFormTitle}>Create Your Profile</Typography>
              ) : (
                  <Typography variant="h3" className={classes.profileFormTitle}>Edit Your Profile</Typography>
                )}
              <Typography className={classes.profileFormText} variant="body1">Fill in the form</Typography>

              <TextField
                className={classes.profileFormInput}
                variant="outlined"
                fullWidth
                label="Profile Handle"
                type="text"
                name="handle"
                value={handle}
                onChange={onChange}
                error={errors.handle}
                helperText={errors ? errors.handle : ''}
              />

              <TextField
                select
                className={classes.profileFormInput}
                variant="outlined"
                fullWidth
                label="Profession"
                type="text"
                // name="profession"
                value={profession}
                onChange={onChange}
                error={errors.profession}
                helperText={errors ? errors.profession : ''}
              >
                {options.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                className={classes.profileFormInput}
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
              <TextField
                className={classes.profileFormInput}
                variant="outlined"
                fullWidth
                label="Short Bio"
                type="text"
                name="bio"
                value={bio}
                onChange={onChange}
                error={errors.bio}
                helperText={errors ? errors.bio : ''}
              />
              <Button onClick={onDisplayInputs} variant="outlined" color="primary">Add Social Network Links</Button>
              {socialInputs}
              <Button variant="contained" color="primary" type="submit" value="Submit" className={classes.profileFormButton}>Submit</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div >
  );
};

ProfileForm.propTypes = {
  updateProfile: PropTypes.bool.isRequired,
  displaySocialInputs: PropTypes.bool.isRequired,
  handle: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    profession: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onToggleDisplayInputs: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProfileForm);
