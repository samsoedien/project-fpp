import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {

  componentDidMount() {
    const { history } = this.props;
    const { isAuthenticated } = this.props.auth;

    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to FoodieShapes</h2>
        <p>The online platform for food printing.</p>
        <h3>Get Started</h3>
        <Link to="/register" className="">Signup</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
