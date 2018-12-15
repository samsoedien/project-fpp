import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
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
        <Grid item md={2}>
          <Avatar alt="" src={`/${profile.user.image}`} className={classes.profileAvatar} />
        </Grid>
        <Grid item md={4} lg={6}>
          <Typography variant="h3">{profile.user.name}</Typography>
          <Typography>
            {profile.status}{' '}
            {isEmpty(profile.company) ? null : (
              <span>at {profile.company}</span>
            )}
          </Typography>
          <Typography>
            {isEmpty(profile.location) ? null : (
              <span>{profile.location}</span>
            )}
          </Typography>
          <Button component={Link} to={`/profiles/${profile.handle}`} variant="contained" color="primary">View Profile</Button>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h4">Skill Set</Typography>
          <ul className="list-group">
            {profile.skills.slice(0, 4).map((skill, index) => (
              <li key={index} className="list-group-item">
                <i className="fa fa-check pr-1" />
                {skill}
              </li>
            ))}
          </ul>
        </Grid>
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
