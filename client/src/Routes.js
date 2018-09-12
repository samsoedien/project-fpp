import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';

import Home from './components/front-page/Home';
import Register from './components/auth/RegisterTemp';
import Login from './components/auth/LoginTemp';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';
import PostListContainer from './containers/PostListContainer';
import PostContainer from './containers/PostContainer';
import NotFound from './components/not-found/NotFound';

import RecipeListContainer from './containers/RecipeListContainer';
import RecipeContainer from './containers/RecipeContainer';
import RecipeFormContainer from './containers/RecipeFormContainer';
import IngredientListContainer from './containers/IngredientListContainer';

import Test from './components/other/Test';

const Routes = () => (
  <main role="main">
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profiles" component={ProfileListContainer} />
    <Route exact path="/profile/:handle" component={ProfileContainer} />
    <Route exact path="/recipes" component={RecipeListContainer} />
    <Route exact path="/recipes/:id" component={RecipeContainer} />
    <Route exact path="/ingredients" component={IngredientListContainer} />
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
      <PrivateRoute exact path="/feed" component={PostListContainer} />
    </Switch>
    <Switch>
      <PrivateRoute exact path="/post/:id" component={PostContainer} />
    </Switch>
    <Switch>
      <PrivateRoute
        exact
        path="/create-recipe"
        component={RecipeFormContainer}
      />
    </Switch>
    <Route exact path="/test" component={Test} />
    <Route exact path="/not-found" component={NotFound} />
  </main>
);

export default Routes;
