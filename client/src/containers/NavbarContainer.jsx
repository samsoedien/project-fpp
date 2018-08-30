import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';

import Navbar from '../components/Navbar';

class NavbarContainer extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Messages
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />
            {' '}
            {user.name}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/" className="dropdown-item">My profile</Link>
            <div className="dropdown-divider"></div>
            <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
            <Link to="/recipes" className="dropdown-item">Recipes</Link>
            <div className="dropdown-divider"></div>
            <a href="" onClick={this.onLogoutClick.bind(this)} className="dropdown-item">Log out</a>
          </div>
        </li>
      </ul>
    );

    return (
      <div>
        <Navbar isAuthenticated={isAuthenticated} authLinks={authLinks} guestLinks={guestLinks} />
      </div>
    );
  }
}

NavbarContainer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(NavbarContainer);
