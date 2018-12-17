import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';

import ProfileItem from './ProfileItem';
import ProfileAction from './ProfileAction';
import Loader from '../common/Loader';

import ACTION_IMG from '../../assets/img/profile-action-business.jpg';


const styles = theme => ({
  profileListTypography: {
    textAlign: 'center',
    marginTop: '16px',
  },
  profileListButton: {
    margin: '12px 0',
  }
});

const ProfileList = ({
  profiles,
  loading,
  limit,
  onShowContentCallback,
  classes,
}) => {
  const onShowContent = () => {
    onShowContentCallback();
  };

  let profileItems;

  if (profiles === null || loading) {
    profileItems = <Loader />;
  } else if (profiles.length > 0) {
    profileItems = profiles
      .slice(0, limit)
      .map(profile => (
        <ProfileItem key={profile._id} profile={profile} />
      ));
  } else {
    profileItems = <Typography variant="h4">No profiles found...</Typography>;
  }

  return (
    <div className="profiles-list">


      <Grid container justify="center">
        <Grid item>
          <Typography variant="h2" className={classes.profileListTypography}>Business Profiles</Typography>
          <Typography paragraph variant="body1" className={classes.profileListTypography}>Browse and connect with chefs</Typography>
          {profileItems}
        </Grid>
        <Grid container justify="center">
          <Button onClick={onShowContent} variant="contained" color="primary" className={classes.profileListButton}>Show more</Button>
        </Grid>
      </Grid>
      <Divider variant="middle" />

      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="body1" className={classes.profileListTypography}>Promote your store by creating a business profile for your patisserie</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <ProfileAction url="/edit-profile" buttonLabel="Improve Business" actionImage={ACTION_IMG} />
      </Grid>
    </div>
  );
};

ProfileList.propTypes = {
  profiles: PropTypes.shape({
    profile: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  limit: PropTypes.number.isRequired,
  onShowContentCallback: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProfileList);
