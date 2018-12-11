import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../actions/profileActions';

import Homepage from '../components/homepage/Homepage';

class HomepageContainer extends Component {
  componentDidMount() {
    const { getCurrentProfile } = this.props;
    getCurrentProfile();
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="homepage-container">
        <Homepage auth={auth} />
      </div>
    );
  }
}

HomepageContainer.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(HomepageContainer);
