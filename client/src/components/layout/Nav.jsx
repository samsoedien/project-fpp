import React from 'react';
import PropTypes from 'prop-types';
import { Link as NavLink } from 'react-router-dom';
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
  root: {
    // flexGrow: 1,
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


const Navbar = ({
  user,
  isAuthenticated,
  isOpen,
  onNavbarToggleCallback,
  onLogoutCallback,
  onHomepage,
  classes,
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

  return (
    <ScrollWrapper onWindowScroll={handleScroll}>
      <div className={classes.root}>
        <AppBar position="fixed" id="myNav" color="primary">
          <Toolbar variant="dense">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography component={NavLink} to="/home" variant="h6" color="inherit">Project FPP</Typography>
            <Typography variant="h6" color="inherit">
              <Tab tag={NavLink} to="/recipes" className="navbar__item__link">Recipes</Tab>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Tab tag={NavLink} to="/restaurants" className="navbar__item__link">Restaurants</Tab>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Tab tag={NavLink} to="/community" className="navbar__item__link">Community</Tab>
            </Typography>
            <MenuList>
              <MenuItem component={NavLink} to="/recipes" className={classes.navMenuItem}>Recipes</MenuItem>
              <MenuItem component={NavLink} to="/restaurants" className={classes.navMenuItem}>Restaurants</MenuItem>
              <MenuItem component={NavLink} to="/community" className={classes.navMenuItem}>Community</MenuItem>
            </MenuList>
            {/* {isAuthenticated ? authLinks : guestLinks} */}
          </Toolbar>
        </AppBar>
      </div>
    </ScrollWrapper>
  );
};

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
