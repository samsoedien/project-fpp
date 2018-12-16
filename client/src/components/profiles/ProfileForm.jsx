import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Input,
  Button,
  MenuItem,
} from '@material-ui/core';
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons';

const styles = theme => ({
  profileFormInput: {
    margin: '12px 0',
  },
  profileFormText: {
    margin: '16px 0',
    textAlign: 'center',
  },
});

const ProfileForm = ({
  updateProfile,
  displaySocialInputs,
  // handle,
  profession,
  company,
  location,
  bio,
  skills,
  twitter,
  facebook,
  instagram,
  image,
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
      <Grid container justify="center">
        <Grid item xs={10} md={8}>
          <form onSubmit={onSubmit} className={classes.profileForm} noValidate autoComplete="off">
            {!updateProfile ? (
              <Typography variant="h3" className={classes.profileFormTitle}>Create Your Profile</Typography>
            ) : (
                <Typography variant="h3" className={classes.profileFormTitle}>Edit Your Profile</Typography>
              )}
            <Typography className={classes.profileFormText} variant="body1">Fill in the form to profile your business to the outisde world.</Typography>

            {/* <TextField
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
            /> */}

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
              label="Business Name"
              type="text"
              name="company"
              value={company}
              onChange={onChange}
              error={errors.company}
              helperText={errors ? errors.company : ''}
            />

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
              label="Specialties"
              type="text"
              name="skills"
              value={skills}
              onChange={onChange}
              error={errors.skills}
              helperText={errors ? errors.skills : ''}
            />
            <TextField
              className={classes.profileFormInput}
              variant="outlined"
              rows="4"
              multiline
              fullWidth
              label="Short Bio"
              type="text"
              name="bio"
              value={bio}
              onChange={onChange}
              error={errors.bio}
              helperText={errors ? errors.bio : ''}
            />
            <Button
              id="image-upload"
              variant="outlined"
              color="primary"
              component="label"
              label="My Label"
              className={classes.recipeUploadButton}
            >
              <Input type="file" name="image" onChange={onChange} className={classes.recipeFileInput} />
              {'Upload'}
              <CloudUploadIcon className={classes.recipeFileButton} />
            </Button>

            <Button onClick={onDisplayInputs} variant="outlined" color="primary">Add Social Network Links</Button>
            {socialInputs}
            <Button variant="contained" color="primary" type="submit" value="Submit" className={classes.profileFormButton}>Submit</Button>
          </form>
        </Grid>
      </Grid>
    </div >
  );
};

ProfileForm.propTypes = {
  updateProfile: PropTypes.bool.isRequired,
  displaySocialInputs: PropTypes.bool.isRequired,
  // handle: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
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
