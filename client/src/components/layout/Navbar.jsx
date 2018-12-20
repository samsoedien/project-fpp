import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
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
// import {
//   Avatar,
// } from '@material-ui/core';

import ScrollWrapper from '../../wrappers/ScrollWrapper';
import './Navbar.css';
import IMG from '../../assets/img/printed-geometry.jpg';

const styles = theme => ({

});

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
    if (scrollDistance > 80) {
      navElement.classList.add('navbar--shrink');
    } else {
      navElement.classList.remove('navbar--shrink');
    }
  };

  const guestLinks = (
    <Nav navbar>
      <NavItem className="navbar__item">
        <NavLink tag={Link} to="/register" className="navbar__item__link">Signup</NavLink>
      </NavItem>
      <NavItem className="navbar__item">
        <NavLink tag={Link} to="/login" className="navbar__item__link">Login</NavLink>
      </NavItem>
    </Nav>
  );

  const authLinks = (
    <Nav navbar>
      {/* <NavItem className="navbar__item">
        <IconButton component={Link} to="/feed" className="classes.margin">
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
      </NavItem> */}
      <NavItem className="navbar__item">
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className="navbar__item__link" nav caret>
            {/* <Avatar
              src={IMG}
            /> */}
            <img
              className="rounded-circle"
              src={IMG}
              alt={user.name}
              style={{ width: '32px', height: '32px', marginRight: '5px' }}
            />
            {' '}
            {user.name}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <NavLink tag={Link} to="/dashboard" className="navbar__item__link--dropdown">Dashboard</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink tag={Link} to={`/profiles/${user.name}`} className="navbar__item__link--dropdown">My Profile</NavLink>
            </DropdownItem>
            {/* <DropdownItem>
              <NavLink tag={Link} to="/ingredients" className="navbar__item__link--dropdown">Ingredients</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink tag={Link} to="/editor" className="navbar__item__link--dropdown">Editor</NavLink>
            </DropdownItem> */}
            <DropdownItem divider />
            <DropdownItem onClick={onLogout}><NavLink tag={Link} to="/home" className="navbar__item__link--dropdown">Logout</NavLink></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </NavItem>
    </Nav>
  );
  return (
    <ScrollWrapper onWindowScroll={handleScroll}>
      <Navbar fixed="top" expand="sm" className={(onHomepage) ? 'navbar' : 'navbar--not-homepage'} id="myNav">
        {/* <Link to="/home" >
          <img src={LOGO} className="navbar__brand" style={{ height: '30px' }} />
        </Link> */}
        <NavbarBrand tag={Link} to="/home" className="navbar__brand">Pas<span className="navbar__brand--grey">three</span>s</NavbarBrand>
        <NavbarToggler onClick={onNavbarToggle} className="navbar__toggler" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto pr-4" navbar>
            <NavItem className="navbar__item">
              <NavLink tag={Link} to="/recipes" className="navbar__item__link" activeStyle={{ color: '#795548' }}>Catalogue</NavLink>
            </NavItem>
            <NavItem className="navbar__item">
              <NavLink tag={Link} to="/profiles" className="navbar__item__link" activeStyle={{ color: '#795548' }}>Pâtisseries</NavLink>
            </NavItem>
            <NavItem className="navbar__item">
              <NavLink tag={Link} to="/community" className="navbar__item__link" activeStyle={{ color: '#795548' }}>Community</NavLink>
            </NavItem>
          </Nav>
          {isAuthenticated ? authLinks : guestLinks}
        </Collapse>
      </Navbar>
    </ScrollWrapper >
  );
};

NavbarComponent.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onNavbarToggleCallback: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onLogoutCallback: PropTypes.func.isRequired,
  onHomepage: PropTypes.bool.isRequired,
};

export default withStyles(styles)(NavbarComponent);
