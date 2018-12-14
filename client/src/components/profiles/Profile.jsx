import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

import Loader from '../common/Loader';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';

const styles = theme => ({

});

const Profile = ({ profile, loading, classes }) => {
  let profileContent;
  if (profile === null || loading) {
    profileContent = <Loader />;
  } else {
    profileContent = (
      <div>
        <Grid item md={6}>
          <Button component={Link} to="/profiles">Back to Profiles</Button>
        </Grid>
        <Grid item md={6} />
        <ProfileHeader profile={profile} />
        <ProfileAbout profile={profile} />
        <ProfileCreds experience={profile.experience} />
      </div>
    );
  }
  return (
    <div className="profile">
      <Grid container justify="center">
        <Grid item md={12}>
          {profileContent}
        </Grid>
      </Grid>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    experience: PropTypes.object,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Profile);
