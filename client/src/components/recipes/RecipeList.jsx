import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import RecipeItem from './RecipeItem';
import RecipeFeatured from './RecipeFeatured';
import Loader from '../common/Loader';
import Carousel from '../common/Carousel';
import SearchBarComponent from '../common/SearchBarComponent';
import ImageBanner from '../homepage/ImageBanner';
import ProfileAction from '../profiles/ProfileAction';

import BANNER_IMG from '../../assets/img/pastry.jpg';
import ACTION_IMG from '../../assets/img/profile-action-recipe.jpg';


const styles = theme => ({
  root: {
  },
  recipeListTitle: {
    margin: '16px 0',
    textAlign: 'center',
  },
  recipeListParagraph: {
    textAlign: 'center',
  },
  recipelistButton: {
    // margin: '24px 0',
    margin: '0 auto',
  }
});

const RecipeList = ({
  recipes,
  loading,
  filterText,
  filterUpdate,
  classes,
}) => {
  const filterCallback = val => {
    filterUpdate(val);
  };

  let recipeItems;
  if (recipes === null || loading) {
    recipeItems = <Loader />;
  } else if (recipes.length > 0) {
    recipeItems = recipes
      .filter(recipe => {
        return (
          recipe.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        );
      })
      .map(recipe => (
        <RecipeItem key={recipe._id} recipe={recipe} />
      ));
  } else {
    recipeItems = <Typography variant="h4">No Recipes found...</Typography>;
  }
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="h3" className={classes.recipeListTitle}>Recipe Catalogue</Typography>
          <Typography paragraph variant="body1" className={classes.recipeListParagraph}>Find below an broad assortment of food printable pastry dishes. With each recipe simple instructions are given in how to prepare the dish. Best of all most recipes can be personalised to your customer wishes!</Typography>
          <Carousel recipes={recipes} loading={loading} />
        </Grid>
      </Grid>


      <ImageBanner />

      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="body1" className={classes.recipeListParagraph}>Also want to create custom pastry dishes for your business? Get started with an easy dish creation process.</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <ProfileAction url="/create-recipe" buttonLabel="Create a Recipe" actionImage={ACTION_IMG} />
      </Grid>

      <SearchBarComponent
        bannerImage={BANNER_IMG}
        searchLabel="Search Recipes"
        filterText={filterText}
        filterUpdate={filterUpdate}
        filterCallback={filterCallback}
      />

      <Grid container justify="center" spacing={24}>
        {recipeItems}
      </Grid>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  filterUpdate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeList);
