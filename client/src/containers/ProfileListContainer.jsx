import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../actions/profileActions';

import ProfileList from '../components/profiles/ProfileList';

class ProfileListContainer extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    return (
      <div className="profile--list-container">
        <ProfileList profiles={profiles} loading={loading} />
      </div>
    );
  }
}

ProfileList.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(ProfileListContainer);

//TODO: Are props correct: ProfileList.propTypes instead of ProfileListContainer.propTypes??