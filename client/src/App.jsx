import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { MuiThemeProvider } from '@material-ui/core';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import store from './store/store';
import theme from './theme/theme';

import './App.scss';
import Routes from './Routes';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwtDecode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/home" component={HeaderContainer} />
            <Route path="/" render={() => <HeaderContainer onHomepage={false} />} />
          </Switch>
          <main className="app-main">
            <Routes />
          </main>
          <FooterContainer />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
