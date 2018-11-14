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
  DropdownItem
} from 'reactstrap';

import ScrollWrapper from '../../wrappers/ScrollWrapper';
import './Navbar.css';

const NavbarComponent = ({
  user,
  isAuthenticated,
  isOpen,
  onNavbarToggleCallback,
  onLogoutCallback
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
      navElement.classList.add('navbar--shrink');
    } else {
      navElement.classList.remove('navbar--shrink');
    }
  };

  const guestLinks = (
    <Nav navbar>
      <NavItem>
        <NavLink tag={Link} to="/register">
          Signup
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/login">
          Login
        </NavLink>
      </NavItem>
    </Nav>
  );

  const authLinks = (
    <Nav navbar>
      <NavItem>
        <NavLink tag={Link} to="/dashboard">
          Messages
        </NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: '25px', marginRight: '5px' }}
            title="You must have a Gravatar connected to your email to display an image"
          />{' '}
          {user.name}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <NavLink tag={Link} to="/dashboard">
              Dashboard
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink tag={Link} to="/profiles">
              Chefs
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink tag={Link} to="/ingredients">
              Ingredients
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink tag={Link} to="/editor">
              Editor
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={onLogout}>Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );

  return (
    <ScrollWrapper onWindowScroll={handleScroll}>
      <Navbar fixed="top" color="light" light expand="md" id="myNav">
        <NavbarBrand href="/">Project FPP</NavbarBrand>
        <NavbarToggler onClick={onNavbarToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto pr-4" navbar>
            <NavItem>
              <NavLink tag={Link} to="/recipes">
                Recipes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/restaurants">
                Restaurants
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/feed">
                Community
              </NavLink>
            </NavItem>
          </Nav>
          {isAuthenticated ? authLinks : guestLinks}
        </Collapse>
      </Navbar>
    </ScrollWrapper>
  );
};

NavbarComponent.propTypes = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onNavbarToggleCallback: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onLogoutCallback: PropTypes.func.isRequired
};

export default NavbarComponent;
