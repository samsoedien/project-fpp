import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileByHandle } from '../actions/profileActions';

import Profile from '../components/profiles/Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    const { getProfileByHandle, match } = this.props;
    if (match.params.handle) {
      getProfileByHandle(match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { profile, history } = this.props;
    if (nextProps.profile.profile === null && profile.loading) {
      history.push('/not-found');
    }
  }

  render() {
    const { profile: { profile, loading } } = this.props;
    return (
      <div className="profile-container">
        <Profile profile={profile} loading={loading} />
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.object.isRequired,
  }).isRequired,
  match: PropTypes.object.isRequired, // eslint-disable-line
  history: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileByHandle })(ProfileContainer);
