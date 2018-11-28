import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';

const ProfileList = ({ profiles, loading }) => {
  let profileItems;

  if (profiles === null || loading) {
    profileItems = <Spinner />;
  } else if (profiles.length > 0) {
    profileItems = profiles.map(profile => (
      <ProfileItem key={profile._id} profile={profile} />
    ));
  } else {
    profileItems = <h4>No profiles found...</h4>;
  }

  return (
    <div className="profiles-list">
      <Container>
        <Row>
          <Col md="12">
            <h1 className="display-4 text-center">Chef Profiles</h1>
            <p className="lead text-center">
              Browse and connect with chefs
            </p>
            {profileItems}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ProfileList.propTypes = {
  profiles: PropTypes.shape({
    profile: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ProfileList;
