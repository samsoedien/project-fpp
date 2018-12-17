import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Avatar,
  Button,
  Chip,
} from '@material-ui/core';

import isEmpty from '../../utils/is-empty';

const styles = theme => ({
  root: {
    maxWidth: '620px',
    margin: '24px 0',
  },
  profileCardMedia: {
    height: 0,
    paddingTop: '40%',
  },
  profileCompany: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  profileAvatar: {
    margin: '0 auto',
    width: 70,
    height: 70,
  },
  profileName: {
    textAlign: 'center',
    marginTop: '2px 0',
  },
  profileProfession: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
  profileButton: {
    marginTop: '6px',
    textAlign: 'center',
  },
  center: { textAlign: 'center' },
  chip: {
    margin: '6px 4px',
  },
  specialities: {
  }
});

const ProfileItem = ({ profile, classes }) => {
  return (
    <div className={classes.root}>
      <Card raised>
        <CardActionArea component={Link} to={`/profiles/${profile.user.name}`}>
          <CardMedia image={profile.image} className={classes.profileCardMedia} />
        </CardActionArea>
        <CardContent>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item xs={4}>
              <Grid container direction="column" justify="center">
                <Link to={`/profile/${profile.user.name}`}>
                  <Avatar src={`/${profile.user.image}`} className={classes.profileAvatar} />
                </Link>
                <Typography component={Link} to={`/profiles/${profile.user.name}`} color="primary" className={classes.profileName}>{profile.user.name}</Typography>
                <Typography variant="caption" className={classes.profileProfession}>Pastry Chef</Typography>
              </Grid>
            </Grid>

            <Grid item xs={8}>
              <Grid container justify="center" alignItems="center" direction="column">
                {profile.status}{' '}
                {isEmpty(profile.company) ? null : (
                  <Typography variant="h6">{profile.company}</Typography>
                )}
                {isEmpty(profile.location) ? null : (
                  <Typography variant="caption">{profile.location}</Typography>
                )}
                <div className={classes.specialities}>
                  {profile.skills.slice(0, 3).map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      className={classes.chip}
                      color="primary"
                    />
                  ))}
                </div>
                <Button component={Link} to={`/profiles/${profile.handle}`} variant="outlined" color="primary" className={classes.profileButton}>View Profile</Button>
              </Grid>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </div >
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
