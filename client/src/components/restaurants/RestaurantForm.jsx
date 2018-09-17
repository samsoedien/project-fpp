import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import InputGroup from '../common/InputGroup';

const RestaurantForm = ({
  displaySocialInputs,
  name,
  twitter,
  facebook,
  instagram,
  errors,
  onChangeCallback,
  onSubmitCallback,
  onSocialInputsToggleCallback,
}) => {
  const onChange = (e) => {
    onChangeCallback(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback();
  };

  const onSocialInputsToggle = () => {
    onSocialInputsToggleCallback();
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

  return (
    <div className="profile-form">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h2>Add A Restaurant Profile</h2>
            <p className="lead text-center">
              Create a Restaurant Page to Promote your business.
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="Name Restaurant"
                name="name"
                value={name}
                onChange={onChange}
                error={errors.name}
                info="The name of your restaurant"
              />
              <div className="mb-3">
                <button
                  type="button"
                  onClick={onSocialInputsToggle}
                  className="btn btn-light"
                >
                  Add Social Network Links
                </button>
                <span className="text-muted">Optional</span>
              </div>
              {socialInputs}
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

RestaurantForm.propTypes = {
  displaySocialInputs: PropTypes.bool.isRequired,
  twitter: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};

export default RestaurantForm;
