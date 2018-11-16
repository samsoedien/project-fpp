import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';

// import Navbar from '../components/layout/Navbar';
import NavbarComponent from '../components/layout/Navbar';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onLogoutCallback = this.onLogoutCallback.bind(this);
    this.onNavbarToggleCallback = this.onNavbarToggleCallback.bind(this);
  }

  onNavbarToggleCallback() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogoutCallback() {
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div className="navbar-container">
        <NavbarComponent
          user={user}
          isAuthenticated={isAuthenticated}
          isOpen={this.state.isOpen}
          onNavbarToggleCallback={this.onNavbarToggleCallback}
          onLogoutCallback={this.onLogoutCallback}
        />
      </div>
    );
  }
}

NavbarContainer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(NavbarContainer);
