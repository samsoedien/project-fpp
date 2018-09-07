import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//import './Navbar.css';

const Navbar = ({
  isAuthenticated,
  authLinks,
  guestLinks,
}) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-lg p-2 bg-white rounded">
      <div className="container">
        <Link to="/" className="navbar-brand">Project FPP</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/profiles" className="nav-link">Chefs<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-link">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link to="/feed" className="nav-link">Community</Link>
            </li>
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  guestLinks: PropTypes.object.isRequired,
  authLinks: PropTypes.object.isRequired,
}

export default Navbar;
