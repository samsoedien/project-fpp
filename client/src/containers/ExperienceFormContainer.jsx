import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../actions/profileActions';

import ExperienceForm from '../components/dashboard/ExperienceForm';

class ExperienceFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false,
    };

    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
    this.onCheckCallback = this.onCheckCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmitCallback(e) {
    const {
      company,
      title,
      location,
      from,
      to,
      current,
      description,
    } = this.state;
    const expData = {
      company,
      title,
      location,
      from,
      to,
      current,
      description,
    };
    this.props.addExperience(expData, this.props.history);
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheckCallback() {
    this.setState(prevState => ({
      disabled: !prevState.disabled,
      current: !prevState.current,
    }));
  }

  render() {
    const {
      company,
      title,
      location,
      from,
      to,
      current,
      description,
      errors,
      disabled,
    } = this.state;
    return (
      <div className="experience-form-container">
        <ExperienceForm
          errors={errors}
          disabled={disabled}
          company={company}
          title={title}
          location={location}
          from={from}
          to={to}
          current={current}
          description={description}
          onCheckCallback={this.onCheckCallback}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

ExperienceFormContainer.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addExperience })(withRouter(ExperienceFormContainer));

// FIXME: returns validation 422 status
