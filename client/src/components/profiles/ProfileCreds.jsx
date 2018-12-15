import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import Moment from 'react-moment';

const styles = theme => ({

});

const ProfileCreds = ({ experience, classes }) => {
  const expItems = experience.map(exp => (
    <li key={exp._id} className="list-group-item">
      <Typography variant="h4">{exp.company}</Typography>
      <p>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
        {exp.to === null ? (
          ' Now'
        ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
      </p>
      <p>
        <strong>Position:</strong> {exp.title}
      </p>
      <p>
        {exp.location === '' ? null : (
          <span>
            <strong>Location: </strong> {exp.location}
          </span>
        )}
      </p>
      <p>
        {exp.description === '' ? null : (
          <span>
            <strong>Description: </strong> {exp.description}
          </span>
        )}
      </p>
    </li>
  ));

  return (
    <Grid item md={6}>
      <h3 className="text-center text-info">Experience</h3>
      {expItems.length > 0 ? (
        <ul className="list-group">{expItems}</ul>
      ) : (
          <p className="text-center">No Experience Listed</p>
        )}
    </Grid>
  );
};

ProfileCreds.propTypes = {
  experience: PropTypes.shape({}).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProfileCreds);
