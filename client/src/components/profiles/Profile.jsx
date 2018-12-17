import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

import Loader from '../common/Loader';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';

const styles = theme => ({
  backButton: {
    position: 'absolute',
    top: '24px',
    left: '24px',
  },
});

const Profile = ({ profile, loading, classes }) => {
  let profileContent;
  if (profile === null || loading) {
    profileContent = <Loader />;
  } else {
    profileContent = (
      <div>
        <Grid item sm={12} md={10}>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} experience={profile.experience} />
        </Grid>
      </div>
    );
  }
  return (
    <div className="profile">
      <Button component={Link} to="/profiles" variant="outlined" color="primary" className={classes.backButton}>Back to Profiles</Button>
      <Grid container justify="center">
        {profileContent}
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
