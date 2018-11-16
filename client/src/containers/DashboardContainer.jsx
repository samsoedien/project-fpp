import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../actions/profileActions';

import Dashboard from '../components/dashboard/Dashboard';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.onDeleteCallback = this.onDeleteCallback.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteCallback(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    return (
      <div className="dashboard">
        <Dashboard
          user={user}
          profile={profile}
          loading={loading}
          onDeleteCallback={this.onDeleteCallback}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(DashboardContainer);
