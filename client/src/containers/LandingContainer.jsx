import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import {  } from '../actions/';

import Landing from '../components/layout/Landing';

class LandingContainer extends Component {
  componentDidMount() {
    // this.props.get...(this.props.match.params.id);
  }

  render() {
    // const { ..., loading } = this.props;
    return (
      <div className="landing-container">
        <Landing />
      </div>
    );
  }
}

LandingContainer.propTypes = {
  // loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LandingContainer);

// TODO: Connect to redux actions if neccessary and cleanup file
