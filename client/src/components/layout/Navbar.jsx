import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ScrollWrapper from '../../wrappers/ScrollWrapper';

import './Navbar.css';

const Navbar = ({
  user,
  isAuthenticated,
  onLogoutCallback,
}) => {
  const onLogout = (e) => {
    e.preventDefault();
    onLogoutCallback();
  };

  const handleScroll = (scrollDistance) => {
    const navElement = document.getElementById('myNav');

    if (scrollDistance > 50) {
      navElement.classList.add('navbar--shrink');
    } else {
      navElement.classList.remove('navbar--shrink');
    }
  };

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
        <a href="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
          <div className="dropdown-divider" />
          <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
          <Link to="/profiles" className="dropdown-item">Chefs</Link>
          <Link to="/ingredients" className="dropdown-item">Ingredients</Link>
          <Link to="/editor" className="dropdown-item">Editor</Link>
          <div className="dropdown-divider" />
          <a href="" onClick={onLogout} className="dropdown-item">Log out</a>
        </div>
      </li>
    </ul>
  );

  return (
    <ScrollWrapper onWindowScroll={handleScroll}>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light shadow-lg p-2 bg-white rounded" id="myNav">
        <div className="container">
          <Link to="/" className="navbar-brand">Project FPP</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/recipes" className="nav-link">Recipes<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/restaurants" className="nav-link">Restaurants</Link>
              </li>
              <li className="nav-item">
                <Link to="/feed" className="nav-link">Community</Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    </ScrollWrapper>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onLogoutCallback: PropTypes.func.isRequired,
};

export default Navbar;

// <li className="nav-item">
// <Link to="/restaurants" className="nav-link">Restaurants</Link>
// </li>