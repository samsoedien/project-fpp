import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';

import Header from '../components/layout/Header';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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
    const { onHomepage } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="navbar-container">
        <Header
          user={user}
          isAuthenticated={isAuthenticated}
          isOpen={isOpen}
          onNavbarToggleCallback={this.onNavbarToggleCallback}
          onLogoutCallback={this.onLogoutCallback}
          onHomepage={onHomepage}
        />
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(HeaderContainer);
