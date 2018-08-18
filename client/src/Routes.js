import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';


const Routes = () => (
  <Router>
    <Route exact path="/" component={Landing} />
    <div className="container">
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profiles" component={Profiles} />
      <Route exact path="/profile/:handle" component={Profile} />
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/recipe/:id" component={Recipe} />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path="/create-profile"
          component={CreateProfile}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path="/edit-profile"
          component={EditProfile}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path="/add-experience"
          component={AddExperience}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path="/add-education"
          component={AddEducation}
        />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/feed" component={Posts} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/post/:id" component={Post} />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path="/create-recipe"
          component={CreateRecipe}
        />
      </Switch>
      <Route exact path="/not-found" component={NotFound} />
    </div>
  </Router>
);

export default Routes;
