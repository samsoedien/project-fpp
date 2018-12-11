import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRouteWrapper = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => auth.isAuthenticated === true
      ? (<Component {...props} />)
      : (<Redirect to="/login" />)
    }
  />
);

PrivateRouteWrapper.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRouteWrapper);
