import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  AppBar,
  Toolbar,
  Tab,
  IconButton,
  MenuList,
  MenuItem,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import ScrollWrapper from '../../wrappers/ScrollWrapper';

const styles = theme => ({
  nav: {
    height: '88px',
    background: 'transparent',
    boxShadow: 'none',
    transition: '.5s',
  },
  navShrink: {
    height: '60px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 16px 32px - 10px rgba(0, 0, 0, 0.2)',
    transition: '.5s',
  },
  navMenuList: {},
  navMenuItem: {
    fontFamily: 'lato',
    fontWeight: '500',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  navMenuItem: {
    display: 'inline-block',
    margin: '0',
  },
});

class Navbar extends Component {
  state = {
    isOpen: false,
    navShrink: false,
  };

  // onNavbarToggle = () => {

  //   onNavbarToggleCallback();
  // };

  onLogout = e => {
    e.preventDefault();
    const { onLogoutCallback } = this.props;
    onLogoutCallback();
  };

  handleScroll = scrollDistance => {
    if (scrollDistance > 80) {
      this.setState({
        navShrink: true,
      });
    } else {
      this.setState({
        navShrink: false,
      });
    }
  };

  // const guestLinks = (
  //   <Nav navbar>
  //     <NavItem className="navbar__item">
  //       <NavLink tag={Link} to="/register" className="navbar__item__link">Signup</NavLink>
  //     </NavItem>
  //     <NavItem className="navbar__item">
  //       <NavLink tag={Link} to="/login" className="navbar__item__link">Login</NavLink>
  //     </NavItem>
  //   </Nav>
  // );

  // const authLinks = (
  //   <Nav navbar>
  //     <NavItem className="navbar__item">
  //       <NavLink tag={Link} to="/feed" className="navbar__item__link">Messages</NavLink>
  //     </NavItem>
  //     <NavItem className="navbar__item">
  //       <UncontrolledDropdown nav inNavbar>
  //         <DropdownToggle className="navbar__item__link" nav caret>
  //           <img
  //             className="rounded-circle"
  //             src={user.avatar}
  //             alt={user.name}
  //             style={{ width: '20px', marginRight: '5px' }}
  //           />
  //           {' '}
  //           {user.name}
  //         </DropdownToggle>
  //         <DropdownMenu right>
  //           <DropdownItem>
  //             <NavLink tag={Link} to="/dashboard" className="navbar__item__link--dropdown">Dashboard</NavLink>
  //           </DropdownItem>
  //           <DropdownItem>
  //             <NavLink tag={Link} to="/profiles" className="navbar__item__link--dropdown">Chefs</NavLink>
  //           </DropdownItem>
  //           <DropdownItem>
  //             <NavLink tag={Link} to="/ingredients" className="navbar__item__link--dropdown">Ingredients</NavLink>
  //           </DropdownItem>
  //           <DropdownItem>
  //             <NavLink tag={Link} to="/editor" className="navbar__item__link--dropdown">Editor</NavLink>
  //           </DropdownItem>
  //           <DropdownItem divider />
  //           <DropdownItem onClick={onLogout}><NavLink tag={Link} to="/home" className="navbar__item__link--dropdown">Logout</NavLink></DropdownItem>
  //         </DropdownMenu>
  //       </UncontrolledDropdown>
  //     </NavItem>
  //   </Nav>
  // );
  render() {
    const {
      user,
      isAuthenticated,
      isOpen,
      onHomepage,
      classes,
    } = this.props;
    const { navShrink } = this.state;
    return (
      <ScrollWrapper onWindowScroll={this.handleScroll}>
        <div className={classes.root}>
          <AppBar position="fixed" id="myNav" color="primary" className={(!navShrink) ? classes.nav : classes.navShrink}>
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography component={Link} to="/home" variant="h6" color="inherit">Project FPP</Typography>
              <MenuList className={classes.navMenuList}>
                <MenuItem component={Link} to="/recipes" className={classes.navMenuItem}>Recipes</MenuItem>
                <MenuItem component={Link} to="/restaurants" className={classes.navMenuItem}>Restaurants</MenuItem>
                <MenuItem component={Link} to="/community" className={classes.navMenuItem}>Community</MenuItem>
              </MenuList>
              {/* {isAuthenticated ? authLinks : guestLinks} */}
            </Toolbar>
          </AppBar>
        </div>
      </ScrollWrapper>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onNavbarToggleCallback: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onLogoutCallback: PropTypes.func.isRequired,
  onHomepage: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Navbar);
