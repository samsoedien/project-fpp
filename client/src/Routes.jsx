import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRouteWrapper from './wrappers/PrivateRouteWrapper';

import Homepage from './containers/HomepageContainer';
import AuthContainer from './containers/AuthContainer';
import DashboardContainer from './containers/DashboardContainer';

import ProfileFormContainer from './containers/ProfileFormContainer';
import ProfileUpdateContainer from './containers/ProfileUpdateContainer';
import ExperienceFormContainer from './containers/ExperienceFormContainer';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';

import PostListContainer from './containers/PostListContainer';
import PostContainer from './containers/PostContainer';

import RecipeListContainer from './containers/RecipeListContainer';
import RecipeContainer from './containers/RecipeContainer';
import RecipeFormContainer from './containers/RecipeFormContainer';

import IngredientListContainer from './containers/IngredientListContainer';
import IngredientContainer from './containers/IngredientContainer';
import IngredientFormContainer from './containers/IngredientFormContainer';

import NutritionContainer from './containers/NutritionContainer';
import RestaurantListContainer from './containers/RestaurantListContainer';
import ThreeEditorContainer from './containers/ThreeEditorContainer';

import NotFound from './components/not-found/NotFound';
import TestComponent from './components/temp/TestComponent';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Homepage} />
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
    <Switch>
      <PrivateRouteWrapper
        exact
        path="/add-nutritions"
        component={NutritionContainer}
      />
    </Switch>
    <Switch>
      <PrivateRouteWrapper exact path="/feed" component={PostListContainer} />
    </Switch>
    <Switch>
      <PrivateRouteWrapper exact path="/post/:id" component={PostContainer} />
    </Switch>
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
  </React.Fragment>
);

export default Routes;
