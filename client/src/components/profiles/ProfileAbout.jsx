import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
} from '@material-ui/core';

import isEmpty from '../../utils/is-empty';

const styles = theme => ({

});

const ProfileAbout = ({ profile, classes }) => {
  // Get first name
  const firstName = profile.user.name.trim().split(' ')[0];

  // Skill List
  const skills = profile.skills.map((skill, index) => (
    <div key={index} className="p-3">
      <i className="fa fa-check" /> {skill}
    </div>
  ));

  return (
    <Grid item md={12}>
      <Card className="mb-3">

        {firstName}'s Bio
            {isEmpty(profile.bio) ? (
          <span>{firstName} does not have a bio</span>
        ) : (
            <span>{profile.bio}</span>
          )}
        <hr />
        <h3 className="text-center text-info">Skill Set</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {skills}
        </div>
      </Card>
    </Grid>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};
export default withStyles(styles)(ProfileAbout);
