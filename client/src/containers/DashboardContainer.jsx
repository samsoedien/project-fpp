import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount, deleteExperience } from '../actions/profileActions';

import Dashboard from '../components/dashboard/Dashboard';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.onDeleteCallback = this.onDeleteCallback.bind(this);
    this.onDeleteExperienceCallback = this.onDeleteExperienceCallback.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteCallback() {
    this.props.deleteAccount();
  }

  onDeleteExperienceCallback(id) {
    this.props.deleteExperience(id);
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
          onDeleteExperienceCallback={this.onDeleteExperienceCallback}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
  profile: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount, deleteExperience })(DashboardContainer);
