import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  Button,
} from '@material-ui/core';

import ProfileAction from '../profiles/ProfileAction';
import Experience from './Experience';
import Equipment from './Equipment';
import Loader from '../common/Loader';
import ConfirmDeleteWrapper from '../../wrappers/ConfirmDeleteWrapper';

import BUSINESS_IMG from '../../assets/img/profile-action-business.jpg';
import RECIPE_IMG from '../../assets/img/profile-action-recipe.jpg';
import BLOG_IMG from '../../assets/img/profile-action-blog.jpg';


const styles = theme => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  dashboardText: {
    margin: '12px 0',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  dashboardTypography: {
    margin: '12px 0',
    textAlign: 'center',
  },
  dashboardButton: {
    margin: '12px auto',
  },
});

const Dashboard = ({
  user,
  profile,
  loading,
  onDeleteCallback,
  onDeleteExperienceCallback,
  classes,
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
      <Fragment>
        <Typography className={classes.dashboardText}>
          {'Welcome '}
          <Link to={`/profiles/${profile.handle}`} className={classes.dashboardText}>{user.name}</Link>
        </Typography>

        <Grid container justify="center">
          <Grid item={10}>
            <Grid container justify="center" spacing={24}>
              <ProfileAction url="/edit-profile" buttonLabel="Drive Business" actionImage={BUSINESS_IMG} />
              <ProfileAction url="/create-recipe" buttonLabel="Modify a Pasthree" actionImage={RECIPE_IMG} />
              <ProfileAction url="/create-blog" buttonLabel="Write a Blog" actionImage={BLOG_IMG} />
            </Grid>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={10} md={8}>
            <Paper elevation={4}>
              <Button component={Link} to="/add-experience">Add Experience</Button>
              <Experience experience={profile.experience} onDeleteExperience={onDeleteExperience} />
              <Typography variant="h5">Equipment</Typography>
              <Equipment equipment="printing" printer="custom food printer" />
              <div style={{ marginBottom: '60px' }} />
              <ConfirmDeleteWrapper onDeleteClick={onDeleteClick} buttonLabel="Delete my account">Are you sure you want to delete your account? This action can not be undone</ConfirmDeleteWrapper>
            </Paper>
          </Grid>
        </Grid >
      </Fragment >
    );
  } else {
    dashboardContent = (
      <Fragment>
        <Typography variant="body1" className={classes.dashboardText}>
          {'Welcome '}
          {user.name}
        </Typography>
        <Grid container justify="center">
          <Grid item xs={10} md={8}>
            <Paper elevation={4}>
              <Typography variant="body1" className={classes.dashboardTypography}>You have not yet setup a profile, add some info</Typography>
              <Grid container justify="center">
                <Button component={Link} to="/create-profile" variant="contained" color="primary" className={classes.dashboardButton}>Create Profile</Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  return (
    <div className="dashboard">
      <Grid container justify="center">
        <Typography variant="h2">Dashboard</Typography>
        <Grid item xs={11} md={10}>
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
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Dashboard);
