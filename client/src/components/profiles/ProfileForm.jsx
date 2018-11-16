import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap';

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
  onSubmitCallback
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  let socialInputs;
  if (displaySocialInputs) {
    socialInputs = (
      <div>
        <FormGroup>
          <Label for="">
            <i className="fab fa-twitter" />
          </Label>
          <Input
            type="text"
            name="twitter"
            placeholder="Twitter Profile URL"
            value={twitter}
            onChange={onChange}
          />
          <FormText color="danger">{errors ? errors.twitter : ''}</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="">
            <i className="fab fa-facebook" />
          </Label>
          <Input
            type="text"
            name="facebook"
            placeholder="Facebook Profile URL"
            value={facebook}
            onChange={onChange}
          />
          <FormText color="danger">{errors ? errors.facebook : ''}</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="">
            <i className="fab fa-instagram" />
          </Label>
          <Input
            type="text"
            name="instagram"
            placeholder="Instagram Profile URL"
            value={instagram}
            onChange={onChange}
          />
          <FormText color="danger">{errors ? errors.instagram : ''}</FormText>
        </FormGroup>
      </div>
    );
  }

  const options = [
    { label: '* Select Professional Status', value: 0 },
    { label: 'Chef de Cuisine', value: 'Chef de Cuisine' },
    { label: 'Sous Chef', value: 'Sous Chef' },
    { label: 'Pastry Chef', value: 'Pastry Chef' },
    { label: 'Chocolatier', value: 'Chocolatier' },
    { label: 'Confectonary', value: 'Confectonary' },
    { label: 'Food Designer', value: 'Food Designer' },
    { label: 'Food Scientist', value: 'Food Scientist' },
    { label: 'Student/Intern', value: 'Student/Intern' },
    { label: 'Other', value: 'Other' }
  ];
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className="profile-form">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            {!updateProfile ? (
              <h2 className="display-4 text-center">Create Your Profile</h2>
            ) : (
              <h2 className="display-4 text-center">Edit Your Profile</h2>
            )}
            <p className="lead text-center">
              Let's get some information to make your profile stand out
            </p>

            <Form onSubmit={onSubmit} noValidate>
              <FormGroup>
                <Label for="">Handle</Label>
                <Input
                  type="text"
                  name="handle"
                  placeholder="* Profile Handle"
                  value={handle}
                  onChange={onChange}
                />
                <FormText color="muted">
                  A unique handle for your profile URL. Your full name, company
                  name, nickname
                </FormText>
                <FormText color="danger">
                  {errors ? errors.handle : ''}
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label>Profession</Label>
                <Input
                  type="select"
                  name="profession"
                  value={profession}
                  onChange={onChange}
                >
                  {selectOptions}
                </Input>
                <FormText color="danger">
                  {errors ? errors.profession : ''}
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">Location</Label>
                <Input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={location}
                  onChange={onChange}
                />
                <FormText color="danger">
                  {errors ? errors.location : ''}
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">Skills</Label>
                <Input
                  type="text"
                  name="skills"
                  placeholder="* Skills"
                  value={skills}
                  onChange={onChange}
                />
                <FormText color="danger">
                  {errors ? errors.skills : ''}
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label for="">About me</Label>
                <Input
                  type="textarea"
                  name="bio"
                  placeholder="Short Bio"
                  value={bio}
                  onChange={onChange}
                />
                <FormText color="danger">{errors ? errors.bio : ''}</FormText>
              </FormGroup>

              <div className="mb-3">
                <Button
                  type="button"
                  className="btn btn-light"
                  onClick={() => {
                    this.setState(prevState => ({
                      displaySocialInputs: !prevState.displaySocialInputs
                    }));
                  }}
                >
                  {' '}
                  Add Social Network Links
                </Button>
                <span className="text-muted">Optional</span>
              </div>
              {socialInputs}
              <Input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
              />
            </Form>
          </Col>
        </Row>
      </Container>
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
  onSubmitCallback: PropTypes.func.isRequired
};

export default ProfileForm;
