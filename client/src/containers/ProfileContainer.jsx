import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfileByHandle } from '../actions/profileActions';

import Profile from '../components/profiles/Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    return (
      <div className="profile-container">
        <Profile profile={profile} loading={loading} />
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileByHandle })(ProfileContainer);

//TODO: Are props correct: Profile.propTypes instead of ProfileContainer.propTypes??