import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import ScrollWrapper from '../../wrappers/ScrollWrapper';
import './Navbar.css';

const NavbarComponent = ({
  user,
  isAuthenticated,
  isOpen,
  onNavbarToggleCallback,
  onLogoutCallback,
  onHomepage,
}) => {
  const onNavbarToggle = () => {
    onNavbarToggleCallback();
  };

  const onLogout = e => {
    e.preventDefault();
    onLogoutCallback();
  };

  const handleScroll = scrollDistance => {
    const navElement = document.getElementById('myNav');
    if (scrollDistance > 50) {
      navElement.classList.add('nav--shrink');
    } else {
      navElement.classList.remove('nav--shrink');
    }
  };

  const guestLinks = (
    <Nav navbar>
      <NavItem className="nav__item">
        <NavLink tag={Link} to="/register" className="nav__item__link">Signup</NavLink>
      </NavItem>
      <NavItem className="nav__item">
        <NavLink tag={Link} to="/login" className="nav__item__link">Login</NavLink>
      </NavItem>
    </Nav>
  );

  const authLinks = (
    <Nav navbar>
      <NavItem className="nav__item">
        <NavLink tag={Link} to="/dashboard" className="nav__item__link">Messages</NavLink>
      </NavItem>
      <NavItem className="nav__item">
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '20px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />
            {' '}
            {user.name}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <NavLink tag={Link} to="/dashboard" className="nav__item__link--dropdown">Dashboard</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink tag={Link} to="/profiles" className="nav__item__link--dropdown">Chefs</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink tag={Link} to="/ingredients" className="nav__item__link--dropdown">Ingredients</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink tag={Link} to="/editor" className="nav__item__link--dropdown">Editor</NavLink>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={onLogout}><NavLink tag={Link} to="/home" className="nav__item__link--dropdown">Logout</NavLink></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </NavItem>
    </Nav>
  );

  return (
    <ScrollWrapper onWindowScroll={handleScroll}>
      <Navbar fixed="top" expand="sm" className={(onHomepage) ? 'nav nav--homepage' : 'nav nav--not-homepage'} id="myNav">
        <NavbarBrand href="/home" className="nav__brand">Project FPP</NavbarBrand>
        <NavbarToggler onClick={onNavbarToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto pr-4" navbar>
            <NavItem className="nav__item">
              <NavLink tag={Link} to="/recipes" className="nav__item__link">Recipes</NavLink>
            </NavItem>
            <NavItem className="nav__item">
              <NavLink tag={Link} to="/restaurants" className="nav__item__link">Restaurants</NavLink>
            </NavItem>
            <NavItem className="nav__item">
              <NavLink tag={Link} to="/feed" className="nav__item__link">Community</NavLink>
            </NavItem>
          </Nav>
          {isAuthenticated ? authLinks : guestLinks}
        </Collapse>
      </Navbar>
    </ScrollWrapper>
  );
};

NavbarComponent.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onNavbarToggleCallback: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onLogoutCallback: PropTypes.func.isRequired,
  onHomepage: PropTypes.bool.isRequired,
};

export default NavbarComponent;
