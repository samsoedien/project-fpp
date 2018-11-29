import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Loader from '../common/Loader';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
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
      <div>
        <p className="lead text-muted">
          {'Welcome '}
          <Link to={`/profiles/${profile.handle}`}>{user.name}</Link>
        </p>
        <ProfileActions />
        <Experience experience={profile.experience} onDeleteExperience={onDeleteExperience} />
        <div style={{ marginBottom: '60px' }} />
        <ConfirmDeleteWrapper onDeleteClick={onDeleteClick} buttonLabel="Delete my account">Are you sure you want to delete your account? This action can not be undone</ConfirmDeleteWrapper>
      </div>
    );
  } else {
    dashboardContent = (
      <div>
        <p className="lead text-muted">
          {'Welcome '}
          {user.name}
        </p>
        <p>You have not yet setup a profile, add some info</p>
        <Link to="/create-profile" className="btn btn-lg btn-info">Create Profile</Link>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Container>
        <Row>
          <Col md="12">
            <h1>Dashboard</h1>
            {dashboardContent}
          </Col>
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
};

export default Dashboard;
