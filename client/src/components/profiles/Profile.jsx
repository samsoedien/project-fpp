import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Loader from '../common/Loader';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';

const Profile = ({ profile, loading }) => {
  let profileContent;
  if (profile === null || loading) {
    profileContent = <Loader />;
  } else {
    profileContent = (
      <div>
        <Row>
          <Col md="6">
            <Link to="/profiles" className="btn btn-light mb-3 float-left">
              Back To Profiles
            </Link>
          </Col>
          <Col md="6" />
        </Row>
        <ProfileHeader profile={profile} />
        <ProfileAbout profile={profile} />
        <ProfileCreds experience={profile.experience} />
      </div>
    );
  }

  return (
    <div className="profile">
      <Container>
        <Row>
          <Col md="12">{profileContent}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
