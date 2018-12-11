import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProfile } from '../actions/profileActions';

import ProfileForm from '../components/profiles/ProfileForm';

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateProfile: false,
      displaySocialInputs: false,
      handle: '',
      profession: '',
      location: '',
      bio: '',
      skills: '',
      twitter: '',
      facebook: '',
      instagram: '',
      errors: {},
    };

    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitCallback() {
    const {
      handle,
      profession,
      location,
      bio,
      skills,
      twitter,
      facebook,
      instagram,
    } = this.state;
    const profileData = {
      handle,
      profession,
      location,
      bio,
      skills,
      twitter,
      facebook,
      instagram,
    };
    const { createProfile, history } = this.props;
    createProfile(profileData, history);
  }

  render() {
    const { errors, displaySocialInputs, updateProfile } = this.state;

    return (
      <div className="profile-form-container">
        <ProfileForm
          errors={errors}
          updateProfile={updateProfile}
          displaySocialInputs={displaySocialInputs}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}
ProfileFormContainer.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.object,
    loading: PropTypes.bool,
  }).isRequired,
  errors: PropTypes.shape({}).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile })(withRouter(ProfileFormContainer));
