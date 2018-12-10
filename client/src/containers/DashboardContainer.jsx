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
    const { getCurrentProfile } = this.props;
    getCurrentProfile();
  }

  onDeleteCallback() {
    const { deleteAccount } = this.props;
    deleteAccount();
  }

  onDeleteExperienceCallback(id) {
    const { deleteExperience } = this.props;
    deleteExperience(id);
  }

  render() {
    const { profile: { profile, loading }, auth: { user } } = this.props;
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

DashboardContainer.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.string.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
  deleteExperience,
})(DashboardContainer);
