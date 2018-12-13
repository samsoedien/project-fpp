import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
        <Row>
          <Col md="6">
            <Button component={Link} to="/profiles">Back to Profiles</Button>
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

Profile.propTypes = {
  profile: PropTypes.shape({
    experience: PropTypes.object,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Profile);
