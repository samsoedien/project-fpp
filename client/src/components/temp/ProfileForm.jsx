import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

const ProfileForm = ({
  updateProfile,
  displaySocialInputs,
  handle,
  profession,
  location,
  bio,
  skills,
  twitter,
  facebook,
  instagram,
  errors,
  onChangeCallback,
  onSubmitCallback,
}) => {
  const onChange = (e) => {
    onChangeCallback(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback();
  };

  let socialInputs;
  if (displaySocialInputs) {
    socialInputs = (
      <div>
        <InputGroup
          placeholder="Twitter Profile URL"
          name="twitter"
          icon="fab fa-twitter"
          value={twitter}
          onChange={onChange}
          error={errors.twitter}
        />

        <InputGroup
          placeholder="Facebook Page URL"
          name="facebook"
          icon="fab fa-facebook"
          value={facebook}
          onChange={onChange}
          error={errors.facebook}
        />

        <InputGroup
          placeholder="Instagram Page URL"
          name="instagram"
          icon="fab fa-instagram"
          value={instagram}
          onChange={onChange}
          error={errors.instagram}
        />
      </div>
    );
  }

  // Select options for status
  const options = [
    { label: '* Select Professional Status', value: 0 },
    { label: 'Head Chef', value: 'Head Chef' },
    { label: 'Sous Chef', value: 'Sous Chef' },
    { label: 'Pastry Chef', value: 'Pastry Chef' },
    { label: 'Food Designer', value: 'Food Designer' },
    { label: 'Food Scientist', value: 'Food Scientist' },
    { label: 'Intern', value: 'Intern' },
    { label: 'Other', value: 'Other' }
  ];
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));


  return (
    <div className="profile-form">
      {(!updateProfile) ? (<h2 className="display-4 text-center">Create Your Profile</h2>) : (<h2 className="display-4 text-center">Edit Your Profile</h2>)}
      <p className="lead text-center">
        Let's get some information to make your profile stand out
      </p>
      <small className="d-block pb-3">* = required fields</small>
      <Form>
        <FormGroup>
          <Label for="">Handle</Label>
          <Input
            type="text"
            name="handle"
            value={handle}
            placeholder="* Profile Handle"
            onChange={onChange}
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.handle
            })}
          />
          <small className="form-text text-muted">
            A unique handle for your profile URL. Your full name, company name, nickname
          </small>}
        </FormGroup>
        <FormGroup>
          <Label></Label>
          <Input
            type="select"
            name="profession"
            value={profession}
            onChange={onChange}
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.profession
            })}
          >
            {selectOptions}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="">Handle</Label>
          <Input
            type="text"
            name="location"
            value={location}
            placeholder="Location"
            onChange={onChange}
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.location
            })}
          />
          <small className="form-text text-muted">info</small>
        </FormGroup>
        <FormGroup>
          <Label for="">Handle</Label>
          <Input
            type="text"
            name="skills"
            value={skills}
            placeholder="* Skills"
            onChange={onChange}
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.skills
            })}
          />
          <small className="form-text text-muted">info</small>
        </FormGroup>
        <FormGroup>
          <Label></Label>
          <Input
            type="textarea"
            name="bio"
            value={bio}
            placeholder="Short Bio"
            onChange={onChange}
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.bio
            })}
          />
        </FormGroup>
        <div className="mb-3">
          <button
            type="button"
            onClick={() => {
              this.setState(prevState => ({
                displaySocialInputs: !prevState.displaySocialInputs
              }));
            }}
            className="btn btn-light"
          >
            Add Social Network Links
                </button>
          <span className="text-muted">Optional</span>
        </div>
        {socialInputs}
        <Button type="submit" value="Submit">Submit</Button>
      </Form>
    </div>
  );
};

ProfileForm.propTypes = {
  updateProfile: PropTypes.bool.isRequired,
  displaySocialInputs: PropTypes.bool.isRequired,
  handle: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  twitter: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};


export default ProfileForm;
