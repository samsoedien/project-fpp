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
      // handle: '',
      profession: '',
      company: '',
      location: '',
      bio: '',
      skills: '',
      twitter: '',
      facebook: '',
      instagram: '',
      image: '',
      errors: {},
      isOpen: false,
    };

    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
    this.onToggleDisplayInputs = this.onToggleDisplayInputs.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onToggleDisplayInputs() {
    this.setState(prevState => ({
      displaySocialInputs: !prevState.displaySocialInputs,
    }));
  }

  onChangeCallback(e) {
    switch (e.target.name) {
      case 'image':
        this.setState({ image: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmitCallback() {
    const {
      // handle,
      profession,
      company,
      location,
      bio,
      skills,
      twitter,
      facebook,
      instagram,
      image,
    } = this.state;
    // const profileData = {
    //   // handle,
    //   profession,
    //   company,
    //   location,
    //   bio,
    //   skills,
    //   twitter,
    //   facebook,
    //   instagram,
    // };
    const profileData = new FormData();
    profileData.append('profession', profession);
    profileData.append('company', company);
    profileData.append('location', location);
    profileData.append('bio', bio);
    profileData.append('skills', skills);
    profileData.append('twitter', twitter);
    profileData.append('facebook', facebook);
    profileData.append('instagram', instagram);
    profileData.append('image', image);

    const { createProfile, history } = this.props;
    createProfile(profileData, history);
  }

  render() {
    const {
      displaySocialInputs,
      updateProfile,
      errors,
      isOpen,
    } = this.state;

    return (
      <div className="profile-form-container">
        <ProfileForm
          updateProfile={updateProfile}
          displaySocialInputs={displaySocialInputs}
          isOpen={isOpen}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
          onToggleDisplayInputs={this.onToggleDisplayInputs}
          errors={errors}
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
