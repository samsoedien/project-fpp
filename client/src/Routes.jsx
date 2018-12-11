import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRouteWrapper from './wrappers/PrivateRouteWrapper';

import LandingContainer from './containers/LandingContainer';
import HomepageContainer from './containers/HomepageContainer';
import AuthContainer from './containers/AuthContainer';
import DashboardContainer from './containers/DashboardContainer';
import ProfileFormContainer from './containers/ProfileFormContainer';
import ProfileUpdateContainer from './containers/ProfileUpdateContainer';
import ExperienceFormContainer from './containers/ExperienceFormContainer';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';
// import PostListContainer from './containers/PostListContainer';
// import PostContainer from './containers/PostContainer';
import RecipeListContainer from './containers/RecipeListContainer';
import RecipeContainer from './containers/RecipeContainer';
import RecipeFormContainer from './containers/RecipeFormContainer';
import IngredientListContainer from './containers/IngredientListContainer';
import IngredientContainer from './containers/IngredientContainer';
import IngredientFormContainer from './containers/IngredientFormContainer';
import BlogListContainer from './containers/BlogListContainer';
import BlogContainer from './containers/BlogContainer';
import RestaurantListContainer from './containers/RestaurantListContainer';
import ThreeEditorContainer from './containers/ThreeEditorContainer';
import NotFound from './components/not-found/NotFound';
import TestComponent from './components/temp/TestComponent';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={LandingContainer} />
    <Route exact path="/home" component={HomepageContainer} />
    <Route
      exact
      path="/register"
      render={() => <AuthContainer hasAccount={false} />}
    />
    <Route
      exact
      path="/login"
      render={() => <AuthContainer hasAccount={true} />}
    />
    <Route exact path="/profiles" component={ProfileListContainer} />
    <Route exact path="/profiles/:handle" component={ProfileContainer} />
    <Route exact path="/recipes" component={RecipeListContainer} />
    <Route exact path="/recipes/:id" component={RecipeContainer} />
    <Route exact path="/restaurants" component={RestaurantListContainer} />
    <Route exact path="/ingredients/:id" component={IngredientContainer} />
    <Route exact path="/ingredients" component={IngredientListContainer} />
    <Route exact path="/blogs/:id" component={BlogContainer} />
    <Route exact path="/community" component={BlogListContainer} />

    <Switch>
      <PrivateRouteWrapper exact path="/dashboard" component={DashboardContainer} />
    </Switch>
    <Switch>
      <PrivateRouteWrapper
        exact
        path="/create-profile"
        component={ProfileFormContainer}
      />
    </Switch>
    <Switch>
      <PrivateRouteWrapper
        exact
        path="/edit-profile"
        component={ProfileUpdateContainer}
      />
    </Switch>
    <Switch>
      <PrivateRouteWrapper
        exact
        path="/create-ingredient"
        component={IngredientFormContainer}
      />
    </Switch>
    <Switch>
      <PrivateRouteWrapper
        exact
        path="/add-experience"
        component={ExperienceFormContainer}
      />
    </Switch>
    {/* <Switch>
      <PrivateRouteWrapper exact path="/feed-private" component={PostListContainer} />
    </Switch>
    <Route exact path="/feed" component={PostListContainer} /> */}
    {/* <Switch>
      <PrivateRouteWrapper exact path="/post/:id" component={PostContainer} />
    </Switch> */}
    <Switch>
      <PrivateRouteWrapper
        exact
        path="/create-recipe"
        component={RecipeFormContainer}
      />
    </Switch>
    <Switch>
      <PrivateRouteWrapper exact path="/editor" component={ThreeEditorContainer} />
    </Switch>
    <Route exact path="/test" component={TestComponent} />
    <Route exact path="/not-found" component={NotFound} />
  </Fragment>
);

export default Routes;
