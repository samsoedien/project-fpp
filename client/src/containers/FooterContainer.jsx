import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Footer from '../components/layout/Footer';

class FooterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {},
    }
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitCallback() {
    const { email } = this.state;
    const newSubscriber = {
      email,
    };
    console.log(newSubscriber);
    // this.props.subscribeNewsletter(newSubscriber, this.props.history);
  }

  render() {
    const { email, errors } = this.state;
    return (
      <div className="footer-container">
        <Footer
          email={email}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
          errors={errors}
        />
      </div>
    );
  }
}

FooterContainer.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default connect(null)(FooterContainer);
