import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(event) {
    event.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-list navbar-list--float-right">
        <li className="navbar-list-item">
          <Link className="navbar-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="navbar-list-item">
          <a href="" onClick={this.onLogoutClick} className="navbar-link">Logout
            <img src={user.avatar} alt={user.name} style={{ width: '25px', marginRight: '5x' }} title="Gravatar image" />
            {' '}
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-list navbar-list--float-right">
        <li className="navbar-list-item">
          <Link className="navbar-link" to="/register">
            Signup
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link className="navbar-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <header className="header-main">
        <nav className="navbar">
          <div className="navbar--container">
            <h1 className="site-logo work-in-progress">Logo</h1>
            <ul className="navbar-list">
              <li className="navbar-list-item">
                <Link className="navbar-link" to="/">
                  Home
                </Link>
              </li>
              <li className="navbar-list-item">
                <Link className="navbar-link" to="/profiles">
                  Chefs
                </Link>
              </li>
              <li className="navbar-list-item">
                <Link className="navbar-link" to="/feed">
                  Community
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);
