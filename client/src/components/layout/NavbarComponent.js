import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">FoodieShapes</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
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
        <li className="nav-item dropdown work-in-progress">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav >
);

export default NavbarComponent;
