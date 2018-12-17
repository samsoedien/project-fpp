import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Avatar,
  Paper,
  IconButton,
} from '@material-ui/core';

import isEmpty from '../../utils/is-empty';

const styles = theme => ({
  profilePaper: {
    margin: '24px 0',
    minHeight: '420px',
    width: '800px',
  },
  image: {
    position: 'relative',
    minHeight: '420px',
    minWidth: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    zIndex: '100',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .25), rgba(0, 0, 0, .7))',
  },
  profileAvatar: {
    position: 'absolute',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: 70,
    width: 70,
  },
  profileUser: {
    position: 'absolute',
    top: '128px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: theme.palette.common.white,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  profileCompany: {
    position: 'absolute',
    bottom: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: theme.palette.common.white,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  profileLocation: {
    position: 'absolute',
    bottom: '160px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: theme.palette.common.white,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  cover: {
    width: 151,
  },
});

const ProfileHeader = ({ profile, classes }) => {
  return (
    <Paper className={classes.profilePaper}>
      <div style={{ backgroundImage: `url(/${profile.image})` }} className={classes.image} id="myHeader">
        <div className={classes.overlay} />
        <Typography variant="subtitle" className={classes.profileUser}>{profile.company}</Typography>
        <Avatar src={`/${profile.user.image}`} className={classes.profileAvatar} />
        <Typography variant="h3" className={classes.profileCompany}>{profile.company}</Typography>

        <Typography>
          {isEmpty(profile.location) ? null : <Typography className={classes.profileLocation}>{profile.location}</Typography>}
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
    </Paper>
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
