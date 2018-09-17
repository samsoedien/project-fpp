import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createRestaurant } from '../actions/restaurantActions';

import RestaurantForm from '../components/restaurants/RestaurantForm';

class RestaurantFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      twitter: '',
      facebook: '',
      instagram: '',
      displaySocialInputs: false,
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
    this.onSocialInputsToggleCallback = this.onSocialInputsToggleCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitCallback(e) {
    const restaurantData = {
      name: this.state.name,
    };
    this.props.createRestaurant(restaurantData, this.props.history);
  }

  onSocialInputsToggleCallback() {
    this.setState(prevState => ({
      displaySocialInputs: !prevState.displaySocialInputs,
    }));
  }

  render() {
    const { name, errors, twitter, facebook, instagram, displaySocialInputs } = this.state;
    return (
      <div className="ingredient-form-container">
        <RestaurantForm
          name={name}
          twitter={twitter}
          facebook={facebook}
          instagram={instagram}
          displaySocialInputs={displaySocialInputs}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
          onSocialInputsToggleCallback={this.onSocialInputsToggleCallback}
        />
      </div>
    );
  }
}

RestaurantFormContainer.propTypes = {
  restaurant: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  restaurant: state.ingredient,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { createRestaurant })(withRouter(RestaurantFormContainer));
