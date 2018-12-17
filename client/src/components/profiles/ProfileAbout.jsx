import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  ListItem,
  Typography,
  Paper,
  Chip,
  Divider,
} from '@material-ui/core';
import Moment from 'react-moment';

import isEmpty from '../../utils/is-empty';

const styles = theme => ({
  profileAboutPaper: {
    marginBottom: '24px',
    width: '800px',
  },
  typography: {
    textAlign: 'center',
    margin: '6px 0',
  },
  profileBio: {
    textAlign: 'center',
    margin: '24px 0',
  },
  chip: {
    margin: '6px 4px',
  },
});

const ProfileAbout = ({ profile, experience, classes }) => {
  // Get first name
  const firstName = profile.user.name.trim().split(' ')[0];

  // Skill List
  const skills = profile.skills.map((skill, index) => (
    <div key={index} className="p-3">
      <Chip
        key={index}
        label={skill}
        className={classes.chip}
        color="primary"
      />
    </div>
  ));

  const expItems = experience.map(exp => (
    <ListItem key={exp._id} className="list-group-item">
      <Typography variant="h4">{exp.company}</Typography>
      <Typography>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
        {exp.to === null ? (
          ' Now'
        ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
      </Typography>
      <Typography>
        <strong>Position:</strong> {exp.title}
      </Typography>
      <Typography>
        {exp.location === '' ? null : (
          <span>
            <strong>Location: </strong> {exp.location}
          </span>
        )}
      </Typography>
      <Typography>
        {exp.description === '' ? null : (
          <span>
            <strong>Description: </strong> {exp.description}
          </span>
        )}
      </Typography>
    </ListItem>
  ));

  return (
    <Paper className={classes.profileAboutPaper}>
      <Typography variant="h6" className={classes.typography}> {firstName}'s Bio</Typography>
      <Typography paragraph variant="body1" className={classes.profileBio}>{isEmpty(profile.bio) ? (`${firstName} 'does not have a bio`) : (profile.bio)}</Typography>

      <Divider variant="middle" />

      <Typography variant="h6" className={classes.typography}>Specialties</Typography>
      <Grid container justify="center" alignItems="center">
        {skills}
      </Grid>

      <Divider variant="middle" />

      <Typography variant="h6" className={classes.typography}>Experience</Typography>
      {expItems.length > 0 ? (
        <List>{expItems}</List>
      ) : (
          <Typography className={classes.typography}>No Experience Listed</Typography>
        )}

    </Paper>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};
export default withStyles(styles)(ProfileAbout);
