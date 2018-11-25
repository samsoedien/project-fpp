import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../actions/profileActions';

import Homepage from '../components/homepage/Homepage';

class HomepageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }

  componentDidMount() {
    const { getCurrentProfile } = this.props;
    getCurrentProfile();
    const { user } = this.props.auth;
    if (user !== undefined) {
      this.setState({
        isLoggedin: true,
      });
    }
  }

  render() {
    const { isLoggedin } = this.state;
    console.log(isLoggedin);

    return (
      <div className="homepage-container">
        <Homepage isLoggedin={isLoggedin} />
      </div>
    );
  }
}

HomepageContainer.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(HomepageContainer);
