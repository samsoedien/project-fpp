import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';

import Navbar from '../components/layout/Navbar';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.onLogoutCallback = this.onLogoutCallback.bind(this);
  }

  onLogoutCallback() {
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        <Navbar user={user} isAuthenticated={isAuthenticated} onLogoutCallback={this.onLogoutCallback} />
      </div>
    );
  }
}

NavbarContainer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(NavbarContainer);

//FIXME: Logout gives infinite spinner. Seems fixed now??