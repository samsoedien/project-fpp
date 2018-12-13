import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
} from '@material-ui/core';

const styles = theme => ({

});

const ProfileActions = () => (
  <div className="btn-group mb-4" role="group">
    <Button component={Link} to="/edit-profile">Edit Profile</Button>
    <Button component={Link} to="/add-experience">Add Experience</Button>
  </div>
);

export default withStyles(styles)(ProfileActions);
