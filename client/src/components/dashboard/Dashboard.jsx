import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
} from '@material-ui/core';

import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Equipment from './Equipment';
import Loader from '../common/Loader';
import ConfirmDeleteWrapper from '../../wrappers/ConfirmDeleteWrapper';

const styles = theme => ({

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
      <Col xs="10">
        <p className="lead text-muted">
          {'Welcome '}
          <Link to={`/profiles/${profile.handle}`}>{user.name}</Link>
        </p>
        <ProfileActions />
        <Experience experience={profile.experience} onDeleteExperience={onDeleteExperience} />
        <Typography variant="h5">Equipment</Typography>
        <Equipment equipment="printing" printer="custom food printer" />
        <Equipment equipment="idle" printer="pastry printer" />
        <div style={{ marginBottom: '60px' }} />
        <ConfirmDeleteWrapper onDeleteClick={onDeleteClick} buttonLabel="Delete my account">Are you sure you want to delete your account? This action can not be undone</ConfirmDeleteWrapper>
      </Col>
    );
  } else {
    dashboardContent = (
      <Col xs="10">
        <Typography variant="body1">
          {'Welcome '}
          {user.name}
        </Typography>
        <Typography variant="body1">You have not yet setup a profile, add some info</Typography>
        <Button component={Link} to="/create-profile">Create Profile</Button>
      </Col>
    );
  }

  return (
    <div className="dashboard">
      <Container>
        <Row>
          <Typography variant="h2">Dashboard</Typography>
          {dashboardContent}
        </Row>
      </Container>
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
