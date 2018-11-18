import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import ConfirmDeleteWrapper from '../../wrappers/ConfirmDeleteWrapper';

const Dashboard = ({ user, profile, loading, onDeleteCallback }) => {
  const onDeleteClick = () => {
    onDeleteCallback();
  };

  let dashboardContent;
  if (profile === null || loading) {
    dashboardContent = <Spinner />;
  } else {
    // Check if logged in user has profile data
    if (Object.keys(profile).length > 0) {
      dashboardContent = (
        <div>
          <p className="lead text-muted">
            Welcome <Link to={`/profiles/${profile.handle}`}>{user.name}</Link>
          </p>
          <ProfileActions />
          <Experience experience={profile.experience} />

          <div style={{ marginBottom: '60px' }} />
          <ConfirmDeleteWrapper onDeleteClick={onDeleteClick} buttonLabel="Delete my account" >Are you sure you want to delete your account? This action can not be undone</ConfirmDeleteWrapper>
        </div>
      );
    } else {
      // User is logged in but has no profile
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome {user.name}</p>
          <p>You have not yet setup a profile, add some info</p>
          <Link to="/create-profile" className="btn btn-lg btn-info">
            Create Profile
          </Link>
        </div>
      );
    }
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
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default Dashboard;
