import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

import Navbar from './Navbar';
import HeroBanner from './HeroBanner';

const Header = ({
  user,
  isAuthenticated,
  isOpen,
  onNavbarToggleCallback,
  onLogoutCallback,
  onHomepage,
}) => {
  return (
    <div className="header">
      <Navbar
        user={user}
        isAuthenticated={isAuthenticated}
        isOpen={isOpen}
        onNavbarToggleCallback={onNavbarToggleCallback}
        onLogoutCallback={onLogoutCallback}
        onHomepage={onHomepage}
      />
      <HeroBanner onHomepage={onHomepage} />
    </div>
  );
};

Header.defaultProps = {
  onHomepage: true,
};

Header.propTypes = {
  user: PropTypes.shape().isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onNavbarToggleCallback: PropTypes.func.isRequired,
  onLogoutCallback: PropTypes.func.isRequired,
  onHomepage: PropTypes.bool,
}

export default Header;
