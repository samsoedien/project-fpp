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
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="display-3 mb-4">Food Printing Platform</h2>
                <p className="lead">
                  {' '}
                  A platform to work with food printing technology.
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">Signup</Link>
                <Link to="/login" className="btn btn-lg btn-light">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
