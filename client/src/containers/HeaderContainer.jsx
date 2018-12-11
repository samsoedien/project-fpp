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
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  onLogoutCallback() {
    const { clearCurrentProfile, logoutUser } = this.props;
    clearCurrentProfile();
    logoutUser();
  }

  render() {
    const { auth: { isAuthenticated, user }, onHomepage } = this.props;
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

HeaderContainer.defaultProps = {
  onHomepage: true,
};

HeaderContainer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  }).isRequired,
  onHomepage: PropTypes.bool,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(HeaderContainer);
