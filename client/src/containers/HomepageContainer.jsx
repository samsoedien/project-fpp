import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {  } from '../actions/';

import Homepage from '../components/homepage/Homepage';

class HomepageContainer extends Component {
  componentDidMount() {
    // this.props.get...(this.props.match.params.id);
  }

  render() {
    // const { ..., loading } = this.props;
    return (
      <div className="homepage-container">
        <Homepage />
      </div>
    );
  }
}

HomepageContainer.propTypes = {
  // loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(HomepageContainer);

// TODO: Connect to redux actions if neccessary and cleanup file