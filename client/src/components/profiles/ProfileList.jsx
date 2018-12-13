import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';

import Loader from '../common/Loader';
import ProfileItem from './ProfileItem';

const styles = theme => ({

});

const ProfileList = ({ profiles, loading, classes }) => {
  let profileItems;

  if (profiles === null || loading) {
    profileItems = <Loader />;
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
            <Typography variant="h4">Chef Profiles</Typography>
            <Typography>Browse and connect with chefs</Typography>
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
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProfileList);
