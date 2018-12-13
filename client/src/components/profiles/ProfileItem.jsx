import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  Avatar,
  Button,
} from '@material-ui/core';

import isEmpty from '../../utils/is-empty';

const styles = theme => ({
  profileAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

const ProfileItem = ({ profile, classes }) => {
  return (
    <div className="profile-item">
      <Card>
        <Row>
          <Col md="2">
            <Avatar alt="" src={`/${profile.user.image}`} className={classes.profileAvatar} />
          </Col>
          <Col md="4" lg="6">
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status}{' '}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Button component={Link} to={`/profiles/${profile.handle}`} variant="contained" color="primary">View Profile</Button>
          </Col>
          <Col md="4">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.object,
    company: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProfileItem);
