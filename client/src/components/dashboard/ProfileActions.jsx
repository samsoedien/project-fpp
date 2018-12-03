import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Button
} from '@material-ui/core';

const ProfileActions = () => (
  <div className="btn-group mb-4" role="group">
    <Link to="/edit-profile" className="btn btn-light">
      <i className="fas fa-user-circle text-info mr-1" />
      Edit Profile
    </Link>
    <Link to="/add-experience" className="btn btn-light">
      <i className="fab fa-black-tie text-info mr-1" />
      Add Experience
    </Link>
  </div>
);

export default ProfileActions;
