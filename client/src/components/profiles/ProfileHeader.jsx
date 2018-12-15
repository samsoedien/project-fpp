import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from '@material-ui/core';

import isEmpty from '../../utils/is-empty';

const styles = theme => ({
  cover: {
    width: 151,
  },
});

const ProfileHeader = ({ profile, classes }) => {
  return (
    <Grid item md={12}>
      <Card>
        <CardMedia
          image={profile.user.image}
          title="Live from space album cover"
          className={classes.cover}
        />
        <CardContent>
          <Grid item md="3" className="col-4 m-auto">
            <img
              className="rounded-circle"
              src={profile.user.avatar}
              alt=""
            />
          </Grid>
          <div className="text-center">
            <Typography variant="h2">{profile.user.name}</Typography>
            <Typography>
              {profile.status}{' '}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </Typography>
            {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
            <Typography>
              {isEmpty(profile.website) ? null : (
                <IconButton component={Link} to={profile.website}><i className="fas fa-globe fa-2x" /></IconButton>
              )}
              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <IconButton component={Link} to={profile.social.twitter}><i className="fab fa-twitter fa-2x" />
                </IconButton>
              )}
              {isEmpty(profile.social && profile.social.facebook) ? null : (
                <IconButton component={Link} to={profile.social.twitter}><i className="fab fa-facebook fa-2x" />
                </IconButton>
              )}
              {isEmpty(profile.social && profile.social.instagram) ? null : (
                <IconButton component={Link} to={profile.social.instagram}><i className="fab fa-instagram fa-2x" />
                </IconButton>
              )}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.object,
    company: PropTypes.string,
    website: PropTypes.string,
    social: PropTypes.object,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProfileHeader);
