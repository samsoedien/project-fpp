import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProfile } from '../actions/profileActions';

import ProfileForm from '../components/temp/ProfileForm';

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
    const profileData = {
      handle: this.state.handle,
      profession: this.state.profession,
      location: this.state.location,
      bio: this.state.bio,
      skills: this.state.skills,

      twitter: this.state.twitter,
      facebook: this.state.facebook,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
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
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile })(withRouter(ProfileFormContainer));
