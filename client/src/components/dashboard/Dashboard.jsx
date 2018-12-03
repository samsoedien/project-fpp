import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Loader from '../common/Loader';
import ConfirmDeleteWrapper from '../../wrappers/ConfirmDeleteWrapper';

const Dashboard = ({
  user,
  profile,
  loading,
  onDeleteCallback,
  onDeleteExperienceCallback,
}) => {
  const onDeleteClick = () => {
    onDeleteCallback();
  };

  const onDeleteExperience = id => {
    onDeleteExperienceCallback(id);
  };

  let dashboardContent;
  if (profile === null || loading) {
    dashboardContent = <Loader />;
  } else if (Object.keys(profile).length > 0) { // Check if logged in user has profile data
    dashboardContent = (
      <Grid item xs>
        <p className="lead text-muted">
          {'Welcome '}
          <Link to={`/profiles/${profile.handle}`}>{user.name}</Link>
        </p>
        <ProfileActions />
        <Experience experience={profile.experience} onDeleteExperience={onDeleteExperience} />
        <div style={{ marginBottom: '60px' }} />
        <ConfirmDeleteWrapper onDeleteClick={onDeleteClick} buttonLabel="Delete my account">Are you sure you want to delete your account? This action can not be undone</ConfirmDeleteWrapper>
      </Grid>
    );
  } else {
    dashboardContent = (
      <Grid item xs>
        <Typography variant="body">
          {'Welcome '}
          {user.name}
        </Typography>
        <Typography variant="body">You have not yet setup a profile, add some info</Typography>
        <Button component={Link} to="/create-profile">Create Profile</Button>
      </Grid>
    );
  }

  return (
    <div className="dashboard">
      <Grid container justify="center">
        <Grid item md={12}>
          <Typography variant="h2">Dashboard</Typography>
          {dashboardContent}
        </Grid>
      </Grid>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    handle: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
  onDeleteExperienceCallback: PropTypes.func.isRequired,
};

export default Dashboard;
